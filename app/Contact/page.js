"use client"
import React, { useState } from 'react';

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [emailSent, setEmailSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactInfo),
    });
    setEmailSent(true);
  };

  return (
  <div className="bg-gray-800 pt-16">
      <img src="/railroadParkCrop.jpg" alt="railroadPark" className="w-full h-96 object-cover object-bottom"/>
    {!emailSent ? (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-100">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
    ) : (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-100">We received your request!</h1>
      <p className="text-white">We will contact you shortly.</p>
    </div>
    )}
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          Phone: <a href="tel:+123456789">+1 (928) 753-1536</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">azsigncomp@citlink.net</a>
        </p>
      </div>
    </div>
  </div>
  );
};
