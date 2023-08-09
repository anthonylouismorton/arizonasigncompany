"use client"
import React from 'react';
import Footer from './Footer';
import ContactImage from './ContactImage';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <ContactImage/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};
