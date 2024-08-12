// components/Notification.js
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Notification = ({ message, type, onClose }) => {
  const notificationStyles = {
    success: 'font-semibold bg-green-100 text-green-700 border-2 border-green-500',
    error: 'font-semibold bg-red-100 text-red-500 border-2 border-red-500',
    info: 'font-semibold bg-blue-100 text-blue-700 border-2 border-blue-500',
  };

  return (
    <div className={`fixed top-5 right-5 p-5 rounded-lg shadow-lg ${notificationStyles[type] || 'bg-gray-800 text-black'}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="group flex p-2 ml-4 bg-transparent rounded-lg">
          <XMarkIcon className="h-4 w-4 text-red-500 group-hover:text-black" style={{ strokeWidth: '4px' }} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
