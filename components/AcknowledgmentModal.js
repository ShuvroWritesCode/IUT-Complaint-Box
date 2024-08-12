import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AcknowledgmentModal = ({ department, batch, onAcknowledge, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="relative bg-gray-200 px-10 py-14 rounded-lg border-4 border-black shadow-md max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex p-2 ml-4 bg-transparent"
        >
          <XMarkIcon className="h-6 w-6 text-black " style={{ strokeWidth: '2px' }} />
        </button>
        <p className="font-serif text-sm text-left font-sm mb-1">
          You are submitting your complaint as a current student of department
          of <b>{department}</b> from <b>{batch}</b>. Click on acknowledge to submit. 
          <br></br>
          <br></br>
          Our system is completely anonymous, and we do not see or store any of your
          personal information.
        </p>
        <button
          onClick={onAcknowledge}
          className="mt-4 -mb-4 font-serif bg-red-pastel text-white px-6 py-2 rounded-lg shadow-sm hover:bg-black"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default AcknowledgmentModal;
