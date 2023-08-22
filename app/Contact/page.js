"use client"
import React from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <Image
        src="/railroadParkCopyResize.jpg"
        alt="RailroadPark"
        layout="responsive"
        objectFit="contain"
        width={1920}
        height={1268}
        className="max-w-full"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
