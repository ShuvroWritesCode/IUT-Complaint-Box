import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { firestore, storage } from '../services/firebase';
import { DownloadIcon, XMarkIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import AnonymousCheckbox from '../components/AnonymousCheckbox';
import Notification from '../components/Notification';
import AcknowledgmentModal from '../components/AcknowledgmentModal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const departments = ['CSE', 'EEE', 'MPE', 'CEE', 'BTM', 'TVE'];
const batches = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Others'];

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Submitted'); // Default status
  const [feedback, setFeedback] = useState(''); // Default feedback
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalAcknowledged, setModalAcknowledged] = useState(false);
  const [file, setFile] = useState(null); // State for file input
  const [fileError, setFileError] = useState(''); // State for file size error

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput('');
      }
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // Check if file size > 5MB
        setFileError('File size exceeds 5MB.');
      } else {
        setFile(selectedFile);
        setFileError('');
      }
    }
  };

  const uploadFile = async () => {
    if (file) {
      const fileRef = ref(storage, `complaints/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      return fileURL;
    }
    return null;
  };

  const submitComplaint = async () => {
    let fileURL = '';
    if (file) {
      fileURL = await uploadFile();
    }

    const complaintData = {
      complaint,
      ...(anonymous ? {} : { department: selectedDepartment, batch: selectedBatch }),
      anonymous,
      tags,
      email,
      status,
      feedback,
      fileURL, // Add file URL to complaint data
      timestamp: Timestamp.fromDate(new Date()),
    };

    try {
      const complaintsCollection = collection(firestore, 'complaints');
      await addDoc(complaintsCollection, complaintData);
      setNotification({ message: 'Complaint submitted successfully!', type: 'success' });
      setComplaint('');
      setSelectedDepartment('');
      setSelectedBatch('');
      setAnonymous(false);
      setTags([]);
      setEmail('');
      setStatus('Submitted');
      setFeedback('');
      setFile(null);
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setNotification({ message: 'Error submitting your complaint.', type: 'error' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!anonymous && (!selectedDepartment || !selectedBatch)) {
      setNotification({ message: 'Department and batch are required unless posting anonymously.', type: 'info' });
      return;
    }

    if (!email.endsWith('@iut-dhaka.edu')) {
      setNotification({ message: 'Enter your valid IUT email address', type: 'error' });
      return;
    }

    if (!anonymous) {
      setShowModal(true);
    } else {
      await submitComplaint();
    }
  };

  const handleModalAcknowledgment = async () => {
    setShowModal(false);
    await submitComplaint();
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full mx-4 sm:mx-auto p-5 bg-white rounded-xl shadow-md border-2 border-red-pastel">
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        {showModal && !modalAcknowledged && (
          <AcknowledgmentModal
            department={selectedDepartment}
            batch={selectedBatch}
            onAcknowledge={handleModalAcknowledgment}
            onClose={handleModalClose}
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="complaint" className="block py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">
              Complaint
            </label>
            <div className="relative">
              <textarea
                id="complaint"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                placeholder="Describe your complaint"
                rows="7"
                className="font-serif text-sm mt-4 block w-full border-2 border-gray-300 rounded-md focus:ring-0 p-3"
              />
              {/* For larger screens */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute bottom-2 right-2 hidden sm:block"
              />
              {/* For mobile view */}
              <button
                type="button"
                onClick={() => document.querySelector('input[type="file"]').click()}
                className="absolute bottom-2 right-2 block sm:hidden"
              >
                <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {fileError && (
                <p className="text-red-500 text-xs mt-1">{fileError}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">Department</label>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {departments.map(department => (
                <label key={department} className="flex items-center p-2 border-2 border-gray-300 rounded-md cursor-pointer hover:border-red-pastel">
                  <input
                    type="radio"
                    name="department"
                    value={department}
                    checked={selectedDepartment === department}
                    onChange={() => setSelectedDepartment(department)}
                    disabled={anonymous}
                    className="h-4 w-4 ml-2"
                  />
                  <span className="ml-2 text-sm font-serif text-gray-700">{department}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">Batch</label>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {batches.map(batch => (
                <label key={batch} className="flex items-center p-2 border-2 border-gray-300 rounded-md cursor-pointer hover:border-red-pastel">
                  <input
                    type="radio"
                    name="batch"
                    value={batch}
                    checked={selectedBatch === batch}
                    onChange={() => setSelectedBatch(batch)}
                    disabled={anonymous}
                    className="h-4 w-4 ml-2"
                  />
                  <span className="ml-2 text-sm font-serif text-gray-700">{batch}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <AnonymousCheckbox
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">Tags</label>
            <div className="relative">
              <input
                id="tags"
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagInput}
                placeholder="Type relevant tags and press Enter (Ex. #admin, #CDS, #Cafeteria)"
                className="font-serif text-sm mt-4 block w-full border-2 border-gray-300 rounded-md focus:ring-0 p-3"
              />
              <div className="flex flex-wrap gap-3 mt-4">
                {tags.map((tag, index) => (
                  <span key={index} className="flex items-center px-3 py-1 text-sm font-semibold text-red-pastel rounded-2xl border-2 border-red-pastel hover:text-red-pastel">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      className="flex items-center justify-center max-h-lvh ml-3 rounded-full p-1"
                    >
                      <XMarkIcon className="h-4 w-4" aria-hidden="true" style={{ strokeWidth: '2px' }} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block py-2 px-4 bg-red-pastel font-medium font-serif rounded-md text-md text-white">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your valid IUT email address"
              className="font-serif text-sm mt-4 block w-full border-2 border-gray-300 rounded-md focus:ring-0 p-3"
            />
          </div>
          <div className="hidden">
            <input
              id="feedback"
              type="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button type="submit" className="w-fit font-serif bg-red-pastel text-white px-6 py-2 rounded-md shadow-sm hover:bg-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
