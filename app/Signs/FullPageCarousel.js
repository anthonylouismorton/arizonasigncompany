"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      &lt; Hello
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      Next &gt;
    </div>
  );
};

const FullPageCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="h-[100vh]">
      <Slider {...settings}>
        <div className="h-[100vh]">
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
        <div className="h-[100vh]">
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
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/billboard3.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/billboard4.jpg"
              alt="Slide 4"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/Welding.jpg"
              alt="Slide 5"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/digitalBillboard.jpg"
              alt="Slide 6"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/ledDisplay.jpg"
              alt="Slide 7"
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
