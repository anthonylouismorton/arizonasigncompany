import React from "react";

const LedLighting = () => {
  return (
    <div className="flex bg-gray-800">
      <div className="w-1/2">
        <img
          src="/ledDisplay.jpg"
          alt="Custom Sign"
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 pl-4 pr-4 mt-2">
        <h2 className="text-2xl font-bold text-gray-100 mt-2">LED Lighting</h2>
        <p className="text-gray-100 mt-6">
        We offer cost-saving and efficient lighting solutions to our clients by leveraging the power of LED technology. Through LED retrofitting, we bring new life to existing signs, upgrading them with energy-efficient LED lights that significantly lower maintenance costs and extend their lifespan. Our custom LED designs enhance brightness and clarity, creating eye-catching displays that make a lasting impression on customers day and night. With our expertise in LED lighting, we deliver innovative and environmentally friendly solutions that elevate our clients&apos; brand visibility and market presence. 
        </p>
      </div>
    </div>
  );
};

export default LedLighting;