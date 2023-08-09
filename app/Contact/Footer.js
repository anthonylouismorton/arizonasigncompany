import React from 'react';
export default function Footer() {
  return( 
    <div className="py-8 flex flex-col sm:flex-row sm:justify-around sm:items-center bg-black text-header-yellow">
      <div className="text-center px-4 mb-4 sm:mb-0 ">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="py-2">
          Phone: <a href="tel:+123456789">+1 (928) 753-1536</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">azsigncomp@citlink.net</a>
        </p>
      </div>
      <div className="text-center px-4">
        <h2 className="text-2xl font-semibold">Hours of operation</h2>
        <p className="py-2">
          Monday - Friday 8AM - 5PM
        </p>
        <p>
          Closed Most Major Holidays
        </p>
      </div>
    </div>
  );
};