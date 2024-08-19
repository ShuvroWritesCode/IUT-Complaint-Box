import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../services/firebase';
import { ArrowDownTrayIcon, PaperClipIcon } from '@heroicons/react/24/outline';

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [sortColumn, setSortColumn] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const complaintsCollection = collection(firestore, 'complaints');
        const snapshot = await getDocs(complaintsCollection);
        const data = snapshot.docs.map(doc => decryptData(doc.data()));
        setComplaints(sortData(data, sortColumn, sortDirection));
      } catch (error) {
        console.error('Error fetching complaints!', error);
      }
    };

    fetchComplaints();
  }, [sortColumn, sortDirection]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update mobile status on resize
    };

    // Initial check for mobile
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const sortData = (data, column, direction) => {
    return data.sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (column) => {
    const direction = (column === sortColumn && sortDirection === 'asc') ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-200 text-gray-900';
      case 'Pending':
        return 'bg-yellow-200 text-gray-900';
      case 'Submitted':
        return 'bg-gray-200 text-gray-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const getDeptClass = (department) => {
    switch (department) {
      case 'CSE':
        return 'bg-blue-200 text-gray-900';
      case 'EEE':
        return 'bg-yellow-200 text-gray-900';
      case 'MPE':
        return 'bg-red-200 text-gray-900';
      case 'CEE':
        return 'bg-green-200 text-gray-900';
      case 'BTM':
        return 'bg-purple-200 text-gray-900';
      case 'TVE':
        return 'bg-gray-200 text-gray-900';
      default:
        return 'bg-gray-0';
    }
  };

  const decryptData = (data) => {
    // Implement your decryption logic here if necessary
    return data;
  };

  const handleDownload = async (fileURL) => {
    try {
      const response = await fetch(fileURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'file';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file!', error);
    }
  };  

  return (
    <div className="table-container">
        <table className="min-w-max font-serif text-xs w-full border-collapse rounded-xl overflow-hidden">
          <thead className="text-md text-white">
            <tr>
              <th onClick={() => handleSort('timestamp')} className="cursor-pointer px-4 py-2 border-b text-center w-1/6">
                Timestamp {sortColumn === 'timestamp' && (sortDirection === 'asc' ? '🔼' : '🔽')}
              </th>
              <th onClick={() => handleSort('department')} className="cursor-pointer px-4 py-2 border-b text-center w-1/6">
                Department {sortColumn === 'department'}
              </th>
              <th onClick={() => handleSort('batch')} className="cursor-pointer px-4 py-2 border-b text-center w-1/6">
                Batch {sortColumn === 'batch'}
              </th>
              <th className="px-4 py-2 border-b text-center w-1/6">Tags</th>
              <th className="px-4 py-2 border-b text-center w-2/6">Complaint</th>
              <th onClick={() => handleSort('status')} className="cursor-pointer px-4 py-2 border-b text-center w-1/6">
                Status {sortColumn === 'status' && (sortDirection === 'asc' ? '🔼' : '🔽')}
              </th>
              <th className="px-4 py-2 border-b text-center w-1/6">Media</th>
              <th className="px-4 py-2 border-b text-center w-1/6">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{new Date(complaint.timestamp.toDate()).toLocaleString()}</td>
                <td className="px-4 py-2 border-b text-center">
                  <span className={`flex w-auto h-6 rounded-full items-center justify-center ${getDeptClass(complaint.department)}`}>
                    {complaint.department || ''}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center">{complaint.batch || ''}</td>
                <td className={`text-sm px-4 py-2 border-b ${complaint.status === 'Submitted' ? 'filter blur-sm' : ''}`}>
                  {Array.isArray(complaint.tags) && complaint.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 text-xs">
                      {complaint.tags.map((tag, idx) => (
                        <span key={idx} className="text-red-pastel px-2 py-1 rounded-full border border-red-pastel">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : ''}
                </td>
                <td className={`px-4 py-2 border-b break-words ${complaint.status === 'Submitted' ? 'filter blur-sm' : ''}`}>
                  {complaint.complaint || ''}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <span className={`flex w-18 h-6 rounded-full items-center justify-center ${getStatusClass(complaint.status)}`}>
                    {complaint.status || 'Submitted'}
                  </span>
                </td>
                <td className={`px-4 py-2 border-b text-center ${complaint.status === 'Submitted' ? 'filter blur-sm' : ''}`}>
                  {complaint.fileURL && (
                    <button
                      onClick={() => {
                        if (complaint.status !== 'Submitted') {
                          handleDownload(complaint.fileURL);
                        }
                      }}
                      className={`bg-white text-red-pastel hover:text-gray-800 ${complaint.status === 'Submitted' ? 'cursor-not-allowed opacity-50' : ''}`}
                      title="Download"
                      disabled={complaint.status === 'Submitted'} // Disables the button if status is 'Submitted'
                    >
                      <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                </td>
                <td className="px-4 py-2 border-b text-left break-words">{complaint.feedback || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ComplaintTable;
