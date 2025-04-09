import React from "react";
import Logo from "../Helper/Logo";
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 dark:bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          <Logo />
          <p className="mt-5 font-semibold text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            maxime iste ab saepe repudiandae non eum placeat earum fuga. Sed
            alias voluptatibus perferendis distinctio ut sit veritatis iusto
            neque sapiente.
          </p>
          {/* Social icons */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <FaYoutube />
          </div>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Services
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Portfolio
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Mobile Number
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              +1234 767849
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Email Address
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p className="text-center text-gray-600 md:text-left">
          Copyright © 2025 Webdev. All Rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-gray-600">Social :</span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
