import Image from "next/image";
import React from "react";
import BoxText from "../Helper/BoxText";
import { BiCheck } from "react-icons/bi";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center">
        {/* Image Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="xl:col-span-2"
        >
          <Image
            src="/images/about.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        {/* Text Content */}
        <div className="xl:col-span-3">
          {/* Box Text */}
          <BoxText text="About Us" />
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 mb-6 text-gray-800 dark:text-gray-200 font-semibold">
            About This Best Selling Book
          </h1>
          {/* Description */}
          <p className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            dolor veritatis minima rerum deserunt exercitationem architecto
            culpa. Voluptatum, aspernatur deserunt? Fugit eum provident officia
            quidem ipsam nam, maxime dicta voluptatum.
          </p>
          {/* List */}
          <div className="mt-8 space-y-5">
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 text-xl" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 text-xl" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum, pariatur asperiores ullam quaerat exercitationem!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 text-xl" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum quibusdam reprehenderit ratione alias?
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 text-xl" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet quibusdam.
              </p>
            </div>
          </div>
          {/* button */}
          <div className="mt-14">
            <a
              href="#_"
              className="rounded px-5 py-2.5 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Read More &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
