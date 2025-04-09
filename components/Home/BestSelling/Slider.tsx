"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg"];

const Slider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {images.map((image, index) => (
        <div key={index} className="h-[500px] m-3 relative">
          <Image
            src={`/images/${image}`}
            alt="slider_image"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-4 text-white text-lg font-bold bg-orange-500 w-full">
            Book Name {index + 1}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
