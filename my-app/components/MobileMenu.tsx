"use client";

import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Schließt das Menü bei Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // md:hidden sorgt dafür, dass dieses Menü auf Desktop-Bildschirmen verschwindet
    <div className="relative md:hidden" ref={menuRef}>
      {/* Das Hamburger-Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-[#565f4c] dark:text-[#848d78] hover:scale-105 transition-transform cursor-pointer"
      >
        <Menu />
      </button>

      {/* Das Dropdown-Menü */}
      {isOpen && (
        <div className="absolute left-0 mt-4 w-48 bg-[#fbf9f4] dark:bg-[#1b1c19] border border-[#565f4c]/10 dark:border-[#848d78]/20 rounded-md shadow-lg py-2 flex flex-col z-50">
          <a
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="text-left px-4 py-2 text-sm text-[#565f4c]/80 dark:text-[#848d78]/80 hover:bg-[#565f4c]/5 dark:hover:bg-[#848d78]/10 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors"
          >
            Shop
          </a>

          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-left px-4 py-2 text-sm text-[#565f4c]/80 dark:text-[#848d78]/80 hover:bg-[#565f4c]/5 dark:hover:bg-[#848d78]/10 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors"
          >
            Unsere Story
          </a>
        </div>
      )}
    </div>
  );
}
