import React from 'react';

export default function SignProposal() {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
        Are you interested in receiving a quote?
      </h1>
      <h6 className="text-lg text-gray-800 text-center mb-6">
        Submit your plans along with your contact information, and we can provide you a competitive installation quote.
      </h6>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">
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
          <label htmlFor="number" className="block text-sm font-medium text-gray-800">
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-800">
            Description
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
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-800">
          Attach Document
        </label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          className="mt-1 block w-full rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800 text-gray-100 placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-800 text-gray-100 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
