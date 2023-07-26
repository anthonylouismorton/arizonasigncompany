"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const FullPageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="h-[70vh]">
          <div className="relative h-full">
            <Image
              src="/billboard.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[70vh]">
          <div className="relative h-full">
            <Image
              src="/billboard2.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[70vh]">
          <div className="relative h-full">
            <Image
              src="/billboard3.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[70vh]">
          <div className="relative h-full">
            <Image
              src="/billboard4.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FullPageCarousel;
