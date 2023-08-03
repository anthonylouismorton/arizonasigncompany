import React from "react";

const CustomSigns = () => {
  return (
    <div className="flex mt-1 bg-gray-800">
      <div className="w-1/2">
        <img
          src="/Welding.jpg"
          alt="Custom Sign"
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 pl-4 pr-4 mt-2">
        <h2 className="text-2xl font-bold text-gray-100 mt-2">Custom Signs</h2>
        <p className="text-gray-100 mt-6">
        At Arizona Sign Company, we offer end-to-end solutions for businesses of all sizes. Our expertise spans from design to installation, and we take pride in creating iconic signs that leave a lasting impact. Whether it&apos;s a small business or a multinational corporation, we treat each client as our top priority, providing exceptional service to all. With a diverse range of satisfied clients, we are dedicated to serving every business with unparalleled dedication and craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default CustomSigns;
