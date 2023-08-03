import React from "react";

const DigitalDisplays = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pl-4 pr-4">
        <h2 className="text-2xl font-bold mt-4">Digital Displays</h2>
        <p className="mt-6">
          At Arizona Sign Company, we excel in creating impactful displays that make a lasting impression. By collaborating with various digital display providers and harnessing our unique creative abilities, we design eye-catching and customized solutions that reflect our clients&apos; brand identity and engage their audiences. Our team of skilled designers and technicians is dedicated to crafting extraordinary experiences tailored to our customers&apos; specific needs in this ever-evolving digital landscape.
        </p>
        <p className="mt-6">
          Whether it&apos;s an interactive digital billboard, a dynamic indoor display, or an attention-grabbing outdoor LED signage, we take a customer-centric approach, tailoring each design to suit the specific goals and preferences of our clients. Our commitment to excellence, combined with the versatility of our offerings, ensures that every display we produce stands out, leaving a powerful and lasting impression on our customers&apos; target audiences.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="/digitalBillboard.jpg"
          alt="Custom Sign"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DigitalDisplays;
