"use client";

import { Menu } from "lucide-react";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-[#1b1c19]/80 backdrop-blur-md">
      <div className="flex justify-between items-center relative px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="w-auto md:w-1/3 flex items-center gap-12 md:gap-0 justify-start">
          
            <button>
                <Menu className="md:hidden"/>
            </button>
          <div>
          <a
            className="text-2xl font-serif italic text-[#565f4c] dark:text-[#848d78]"
            href=".."
          >
            Lumyra Manufacture
          </a>
          </div>
        </div>
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 items-center ">
          <a
            className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300"
            href="./shop"
          >
            Shop
          </a>
          <a
            className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300"
            href="./about"
          >
            Unsere Story
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a className="flex items-center text-[#565f4c] dark:text-[#848d78] hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">shopping_bag</span>
          </a>
          <a className="flex items-center text-[#565f4c] dark:text-[#848d78] hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">account_circle</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
