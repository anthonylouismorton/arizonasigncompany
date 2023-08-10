"use client"
import React, {useState} from 'react';
import axios from 'axios'

export default function SignProposal() {
  const [signInfo, setSignInfo] = useState({
    name: '',
    email: '',
    description: '',
    phoneNumber: '',
    attachment: '',
    file: {}
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "attachment") {
      const selectedFile = files[0]; 
      if (selectedFile) {
        setSignInfo((prevData) => ({
          ...prevData,
          attachment: value,
          file: selectedFile
        }));
      }
    } else {
      setSignInfo((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.preventDefault()
    var formData = new FormData();
    formData.append('file', signInfo.file, signInfo.file.name);
    formData.append('email', signInfo.email);
    formData.append('name', signInfo.name);
    formData.append('description', signInfo.description);
    formData.append('phoneNumber', signInfo.phoneNumber);
    await axios.post('/api/installation', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    setEmailSent(true);
  };
  return (
    !emailSent ? (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Interested in receiving a quote?
        </h1>
        <h6 className="text-lg text-gray-800 text-center mb-6">
          Provide your contact information and a brief description of your project and one of our sales representatives will contact you.
        </h6>
      </div>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-sm border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={signInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-sm border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={signInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-800">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full rounded-sm border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={signInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-800">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Please provide a brief description of your project."
            rows={3}
            className="mt-1 block w-full rounded-sm border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={signInfo.description}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-800">
          Attach Document
        </label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          className="mt-1 block w-full rounded-sm shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-500 bg-white"
          value={signInfo.attachment}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-before-yellow text-black border border-transparent rounded-sm font-semibold text-white hover:bg-black hover:text-header-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-before-yellow mt-4"
        >
          Submit
        </button>
      </form>
    </div>
     ) : (
    <div className="text-center px-4 py-8 h-72">
      <h1 className="text-3xl font-semibold pb-6 pt-12 text-gray-700">We received your request!</h1>
      <p className="text-gray-700">One of our representatives will contact you shortly.</p>
    </div>
    )
  );
};
