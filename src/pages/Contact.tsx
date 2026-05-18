import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Contact Us & Grievance Redressal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Standard Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-2">Email: contact@example.com</p>
          <p className="text-gray-700 mb-2">Phone: +91 XXXXX XXXXX</p>
          {/* Add a contact form here later if needed */}
        </div>

        {/* Grievance Officer Details (Required for DPDP Act) */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Grievance Officer</h2>
          <p className="text-sm text-gray-600 mb-4">
            In accordance with the DPDP Act, the contact details of our Grievance Officer are provided below:
          </p>
          <p className="text-gray-800 font-medium">Name: [Officer Name]</p>
          <p className="text-gray-800">Email: grievance@example.com</p>
          <p className="text-gray-800">Address: [Physical Address Here]</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;