import BoxText from "@/components/Helper/BoxText";
import React from "react";
import Slider from "./Slider";

const BestSelling = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        {/* Box Text */}
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Bestselling" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">
          Our Best Selling Ebooks
        </h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam corrupti libero.
        </p>
      </div>
      {/* Slider div */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-16">
        <Slider />
      </div>
    </div>
  );
};

export default BestSelling;
