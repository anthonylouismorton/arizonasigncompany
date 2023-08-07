"use client"
import React, { useState } from 'react';

export default function CraneForm() {
  const [liftInfo, setLiftInfo] = useState({
    name: '',
    dateAndTime: '',
    email: '',
    phoneNumber: '',
    description: ''
  });
  const [emailSent, setEmailSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLiftInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/crane', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(liftInfo),
    });
    setEmailSent(true);
  };

  return (
    !emailSent ? (
    <div className="bg-gray-800 flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-gray-100 text-center mb-4">
        Interested in scheduling crane service?
      </h1>
      <h6 className="text-lg text-gray-100 text-center mb-6 w-2/3">
        Fill out the form below and one of our dedicated crane service scheduler will promptly get in touch with you to assist with your needs.
      </h6>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={liftInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateAndTime" className="block text-sm font-medium text-gray-100">
            Requested Date/Time of Crane Service
          </label>
          <input
            type="text"
            id="dateAndTime"
            name="dateAndTime"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={liftInfo.dateAndTime}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={liftInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-100">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={liftInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-100">
            Crane Service Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Please provide a basic description of your project including the time for completion (max 500 characters)."
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
            value={liftInfo.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-100 text-gray-700 border-transparent rounded-md font-semibold text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
    ) : (
    <div className="text-center px-4 py-8 h-72">
      <h1 className="text-3xl font-semibold pb-6 pt-12 text-gray-800">We received your request!</h1>
      <p className="text-white">One of our representatives will contact you shortly.</p>
    </div>
    )
  );
};
