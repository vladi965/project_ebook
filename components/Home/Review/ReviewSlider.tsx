"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

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

const ReviewSlider = () => {
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
      <div>
        {/* ReviewCard */}
        <ReviewCard name="John Doe" role="Teacher" image="/images/user1.jpg" />
      </div>
      <div>
        {/* ReviewCard */}
        <ReviewCard
          name="Jane Doe"
          role="Developer"
          image="/images/user2.jpg"
        />
      </div>
      <div>
        {/* ReviewCard */}
        <ReviewCard
          name="Javi Doe"
          role="Devops Engineer"
          image="/images/user3.jpg"
        />
      </div>
      <div>
        {/* ReviewCard */}
        <ReviewCard
          name="Jonas Doe"
          role="Mern Developer"
          image="/images/user1.jpg"
        />
      </div>
      <div>
        {/* ReviewCard */}
        <ReviewCard
          name="Jessica Doe"
          role="NextJS Developer"
          image="/images/user2.jpg"
        />
      </div>
    </Carousel>
  );
};

export default ReviewSlider;
