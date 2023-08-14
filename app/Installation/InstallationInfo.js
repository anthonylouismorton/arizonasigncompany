import React from "react";

const InstallationInfo = () => {
  return (
    <div>
      <img
        src="/newinstall.jpg"
        alt="Installation"
        className="max-w-full h-auto"
      />
      <div className="pt-16">
        <div>
          <h1 className="relative text-header-yellow font-bold text-5xl pb-6 pl-6 pr-6 sm:pl-6 md:pl-12 lg:pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
            Sign Installation
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="px-6 lg:px-24 md:px-12 sm:px-6">
            At Arizona Sign Company, we offer end-to-end solutions for businesses of all sizes. Our expertise spans from design to installation, and we take pride in creating iconic signs that leave a lasting impact. Whether it&apos;s a small business or a multinational corporation, we treat each client as our top priority, providing exceptional service to all. With a diverse range of satisfied clients, we are dedicated to serving every business with unparalleled dedication and craftsmanship.
          </p>
        </div>
        <div className="flex justify-center">
          <p className="pt-6 px-6 lg:px-24 md:px-12 sm:px-6">
            In addition to serving our local clientele, Arizona Sign Company has been a trusted partner for sign installation services to companies across the nation. Our reputation for excellence and attention to detail has led businesses from various states to rely on our expertise for their signage needs. From coordinating logistics to ensuring precise installations, our experienced team works diligently to deliver outstanding results and bring brands to life nationwide. As we continue to expand our network of satisfied clients, we remain committed to delivering top-quality service and craftsmanship to businesses throughout the country.
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default InstallationInfo;
