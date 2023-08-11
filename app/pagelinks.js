import React from 'react';
import Image from 'next/image';

export default function PageLinks() {
  return (
    <div className="flex flew-col md:flex-col lg:flex-row bg-custom-color">
      <div className="relative flex-1 m-2 bg-custom-color">
        <a href="/Signs">
        <Image
          src="/dairyQueenResize.jpg"
          alt="Dairy Queen"
          className="transition-brightness hover:brightness-75"
          width={500} 
          height={200}
        />
        </a>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
          <a href="/Signs">
          <p className="text-white text-center hover:text-header-yellow">Signs</p>
          </a>
      </div>
      </div>
      <div className="relative flex-1 m-2">
        <a href="/Installation">
        <Image 
          src="/installation2resize.jpg" 
          alt="Image 2" 
          className="transition-brightness hover:brightness-75"
          width={500} 
          height={200} 
        />
        </a>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
          <a href="/Installation">
          <p className="text-white text-center hover:text-header-yellow">Installation</p>
          </a>
        </div>
      </div>
      <div className="relative flex-1 m-2">
        <a href="/CraneService">
        <Image 
          src="/cranelift2Resize.jpg" 
          alt="Crane Lift" 
          className="transition-brightness hover:brightness-75"
          width={500} 
          height={300} 
        />
        </a>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
          <a href="/CraneService">
          <p className="text-white hover:text-header-yellow">Crane Service</p>
          </a>
        </div>
      </div>
    </div>
  );
}
