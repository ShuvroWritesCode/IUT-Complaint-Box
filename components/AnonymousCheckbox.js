import React from 'react';

const AnonymousCheckbox = ({ checked, onChange }) => {
  return (
    <label htmlFor="anonymous" className="flex items-center space-x-2">
      <input
        id="anonymous"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 border-red-700 rounded focus:ring-red-700 hover:border-black"
      />
      <span className="text-medium font-semibold text-red-700">Post as anonymous</span>
    </label>
  );
};

export default AnonymousCheckbox;
