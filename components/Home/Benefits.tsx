import React from "react";
import { BiBook, BiLink, BiVideo } from "react-icons/bi";
import { MdEco } from "react-icons/md";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const benefits = [
  {
    title: "Cost-Effective Option",
    description:
      "Ebooks typically come at a lower price point than physical books, making them a more affordable option for readers.",
    icon: <BiVideo className="w-6 h-6 text-white" />,
  },
  {
    title: "Eco-Conscious Choice",
    description:
      "Ebooks are environmentally friendly, as they do not require paper, ink, or physical shipping, reducing their carbon footprint.",
    icon: <MdEco className="w-6 h-6 text-white" />,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Ebooks can be afforlessly searched and indexed, making it easier for readers to find specific content or topics.",
    icon: <BiBook className="w-6 h-6 text-white" />,
  },
  {
    title: "Enhanced Convenience",
    description:
      "Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overflow.",
    icon: <BiLink className="w-6 h-6 text-white" />,
  },
];

const Benefits = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
        {/* Box Text */}
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Benefits" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">
          Discover your Benefits
        </h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Plus, enjoy the convenience of offline access to our ebooks, allowing
          you to read at your convenience, anytime, and anywhere.
        </p>
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center">
          {/* Left Side Card */}
          <div className="grid gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={index * 100}
                className="p-6 bg-white dark:bg-gray-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* center image */}
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <Image
              src="/images/b.jpg"
              alt="image"
              width={900}
              height={900}
              className="rounded-xl shadow-md"
            />
          </div>
          {/* Right Card */}
          <div className="grid gap-6">
            {benefits.slice(2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay={300 + index * 100}
                className="p-6 bg-white dark:bg-gray-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 md:px-8 md:py-3 rounded-lg text-lg font-medium transition duration-300">
            Read More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
