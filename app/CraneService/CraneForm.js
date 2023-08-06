import React from 'react';

export default function CraneForm() {
  return (
    <div className="bg-gray-800 flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-gray-100 text-center mb-4">
        Interested in scheduling crane service?
      </h1>
      <h6 className="text-lg text-gray-100 text-center mb-6 w-2/3">
        Please provide your contact information, along with the date, time, and a brief description of the work being performed. Our dedicated crane service scheduler will promptly get in touch with you to assist with your needs.
      </h6>
      <form className="w-full max-w-md">
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Requested Date/Time of Crane Service
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-100">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
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
            placeholder="Please provide a brief description of your project (max 300 characters)."
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-100 text-gray-800 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
