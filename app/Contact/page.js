"use client"
import React from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <Image
        src="/railroadParkCrop.jpg"
        alt="Lift"
        layout="responsive"
        objectFit="contain"
        width={2154}
        height={668}
        className="max-w-full"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
