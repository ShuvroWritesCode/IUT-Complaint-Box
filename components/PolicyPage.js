// components/PolicyPage.js
import React from 'react';
import policy from '../policy';

const PolicyPage = () => {
  return (
    <div className="p-10 font-serif w-full my-auto mx-auto rounded-xl border-2 border-red-pastel">
      <h1 className="text-xl font-medium text-center mb-6">{policy.title}</h1>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-4">Purpose</h2>
        <p className="text-sm text-gray-700">{policy.purpose}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-4">Features</h2>
        <ul className="text-sm list-disc list-inside text-md text-gray-700">
          {policy.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-4">Safety and Security</h2>
        <ul className="text-sm list-disc list-inside text-md text-gray-700">
          {policy.safety.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-4">Commitment to Improvement</h2>
        <p className="text-sm text-gray-700">{policy.commitment}</p>
      </section>
      <footer className="text-center mt-8">
        <p className="text-sm pt-10 mb-5 text-gray-600">
          &copy; 2024 | IUT Complaint Box - Policy.
        </p>
      </footer>
    </div>
  );
};

export default PolicyPage;
