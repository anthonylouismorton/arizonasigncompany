"use client"
import React from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-16 bg-custom-color">
      <div className="h-96 w-full relative">
        <Image
          alt='ra'
          src='/railroadParkCrop.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition="bottom"
        />
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
};
