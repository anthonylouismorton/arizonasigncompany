"use client"
import React from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <div className="w-full h-[400px] md:h-[700px] relative">
        <Image
          src="/railroadParkCrop.jpg"
          alt="railroadPark"
          layout="fill"
          objectFit="cover"
          className="max-w-full object-bottom"
        />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
