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
          alt="railroadPark"
          layout="responsive"
          objectFit="fill"
          width={1298}
          height={738}
          className="max-w-full"
        />
      <ContactForm />
      <Footer />
    </div>
  );
}
