import React from "react";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div data-aos="fade-up">
          {/* Box Text */}
          <BoxText text="Digital E-book" />
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3.5rem]">
            Ebooks to Foster Your Personal and Professional{""}
            <span className="text-orange-500">Development</span>
          </h1>
          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            error sequi cupiditate magnam, laudantium inventore ipsa ex, aperiam
            totam ducimus asperiores odio recusandae cum perspiciatis natus in
            Officia, porro dolor
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* 1st Button */}
            <a
              href="#_"
              className="relative overflow-hidden px-10 py-3 font-medium text-white transition duration-300 bg-rose-600 rounded-md hover:bg-rose-800 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Download Now</span>
            </a>
            {/* 2do Buttons */}
            <a
              href="#_"
              className="relative overflow-hidden px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Browse Ebook</span>
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block rounded-t-full"
        >
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-t-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
