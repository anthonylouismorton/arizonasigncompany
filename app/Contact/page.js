"use client"
import React from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <img
        src="/railroadParkCopyResize.jpg"
        alt="RailroadPark"
        className="w-full"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
