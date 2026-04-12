import React from 'react';
import Footer from './Footer';
import PageLinks from './pagelinks';
import Image from "next/legacy/image";
import 'font-awesome/css/font-awesome.min.css';

export default function Home() {
  return (
    <div>
      <div className='py-16 bg-custom-color'>
        <div className="w-full h-[400px] md:h-[700px] relative">
          <Image
            src="/fiveBelowResize.jpg"
            alt="fiveBelow"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="max-w-full object-top brightness-50"
          />
          <div className="absolute inset-x-4 inset-y-4 md:inset-x-40 md:inset-y-40 ">
            <div className="text-white">
              <h1 className="lg:text-6xl md:text-4xl text-xl font-bold md:mb-6 mb-1">
                Visibility Starts Here
              </h1>
              <p className="lg:text-4xl md:text-2xl text-xl font-bold mb-32 sm:mb-20">
                We Specialize in Quality Custom Signs.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center items-start">
              <div className="pr-4 pb-4 lg:pb-0">
                  <a
                    href="tel:+1-928-753-1536"
                    className="bg-header-yellow text-black py-3 px-5 rounded-md text-md sm:text-lg font-semibold hover:text-white transition flex items-center space-x-2 m-0 p-0"
                  >
                    <i className="fa fa-phone"></i>
                    <span>Call Us</span>
                  </a>
                </div>
                <div>
                  <a
                    href="/Signs#quote"
                    className="bg-red-600 text-white py-3 px-5 rounded-md text-md sm:text-lg font-semibold hover:bg-red-700 transition flex items-center space-x-2 m-0 p-0"
                  >
                    <span>Get Started on Your Vision</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-16">
          <div>
            <h1 className="relative text-header-yellow font-bold text-5xl pb-6 pl-6 pr-6 sm:pl-6 md:pl-12 lg:pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
              Who We Serve
            </h1>
            <div className="flex justify-center">
              <p className="px-6 lg:px-24 md:px-12 sm:px-6">
                We provide exceptional services to a wide range of customers spanning across Arizona, Nevada, and California. Whether you operate a small local business or a large-scale multinational corporation, we are committed to serving you with unparalleled dedication and craftsmanship. With our customer-centric approach and the ability to deliver nationwide, we are poised to meet the unique needs of every client, making a lasting impact through our high-quality signage solutions.
              </p>
            </div>
          </div>
          <div>
            <h1 className="pt-12 relative text-header-yellow font-bold text-5xl pb-6 pl-6 pr-6 sm:pl-6 md:pl-12 lg:pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
              Our Products and Services
            </h1>
            <div className="flex justify-center">
              <p className="px-6 lg:px-24 md:px-12 sm:px-6">
                At Arizona Sign Company, we offer a comprehensive range of products and services tailored to meet your signage needs. From billboards to monument signs, channel letters, decals, and more, we specialize in crafting a diverse array of signs that make a powerful impact. Our expertise extends beyond sign fabrication, as we also provide installation services not only for our own products but also for other sign companies nationwide. Whatever your signage requirements may be, we are dedicated to delivering top-quality solutions and exceptional service, making your brand stand out with every sign we create and install.
              </p>
            </div>
          </div>
          <div>
            <h1 className="pt-12 relative text-header-yellow font-bold text-5xl pb-6 pl-6 pr-6 sm:pl-6 md:pl-12 lg:pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
              Over 70 years of Service
            </h1>
            <div className="flex justify-center">
              <p className="px-6 lg:px-24 md:px-12 sm:px-6">
                Founded in 1945, our company has upheld a distinguished reputation for delivering outstanding products and services over the years. With a legacy of excellence, we remain dedicated to providing unparalleled solutions to our esteemed clientele, ensuring their complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageLinks/>
      <Footer/>
    </div>
  );  
};
