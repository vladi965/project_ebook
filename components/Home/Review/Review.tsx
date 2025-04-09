import BoxText from "@/components/Helper/BoxText";
import React from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        {/* Box Text */}
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Review" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">Our Success Stories</h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam corrupti libero.
        </p>
      </div>
      {/* Slider */}
      <div className="w-[80%] mx-auto mt-16">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
