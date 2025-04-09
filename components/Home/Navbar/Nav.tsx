"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/components/Helper/Logo";
import Link from "next/link";
import { navLinks } from "@/constants/constants";
import { FiDownloadCloud } from "react-icons/fi";
import ThemeToggle from "@/components/Helper/ThemeToggle";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full dark:bg-gray-950 dark:text-white`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* NAVLINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-gray-800 hover:text-orange-500 font-semibold transition-all duration-200 dark:hover:text-orange-500 dark:text-white"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* Download buttons */}
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 ring-offset-orange-200 hover:ring-offset-orange-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <FiDownloadCloud className="mr-3 w-5 h-5" />
              Download
            </span>
          </a>
          {/* Toogle Buttons */}
          <ThemeToggle />
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-orange-500 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
