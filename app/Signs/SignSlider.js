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

const SignSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden">
      <Slider {...settings}>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/billboard.jpg"
              alt="Installation"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
              src="/billboard2.jpg"
              alt="Installation"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
                src="/billboard3.jpg"
                alt="Installation"
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full"
              />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
                src="/culvers.jpg"
                alt="Installation"
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full"
              />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
        <div className="h-[100vh]">
          <div className="relative h-full">
            <Image
                src="/welding.jpg"
                alt="Installation"
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full"
              />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SignSlider;
