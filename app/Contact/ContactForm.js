"use client"
import React, { useState } from 'react';

export default function ContactForm() {
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
    !emailSent ? (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-header-yellow font-bold text-5xl mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-sm shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-sm shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full rounded-sm shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-sm shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
            value={contactInfo.message}
            onChange={handleChange}
          />
        </div>
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
      <h1 className="text-3xl font-semibold pb-6 pt-12">We received your request!</h1>
      <p>One of our representatives will contact you shortly.</p>
    </div>
    )
  );
};
