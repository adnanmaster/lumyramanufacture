"use client";

import { useState, useRef, useEffect } from "react";
import { useClerk, SignOutButton } from "@clerk/nextjs";

export default function CustomProfileButton() {
  const { openUserProfile } = useClerk();
  // State, um das Menü zu öffnen/schließen
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Diese Funktion schließt das Menü automatisch, wenn man irgendwo anders auf den Bildschirm klickt
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
    <div className="relative" ref={menuRef}>
      {/* Dein Haupt-Icon (Der Trigger) */}
      <a
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-[#565f4c] dark:text-[#848d78] hover:scale-105 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined">account_circle</span>
      </a>

      {/* Das versteckte Dropdown-Menü */}
      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 bg-[#fbf9f4] dark:bg-[#1b1c19] border border-[#565f4c]/10 dark:border-[#848d78]/20 rounded-md shadow-lg py-2 flex flex-col z-50">
          <button
            onClick={() => {
              setIsOpen(false);
              openUserProfile(); // Öffnet das große Clerk-Fenster
            }}
            className="text-left px-4 py-2 text-sm text-[#565f4c]/80 dark:text-[#848d78]/80 hover:bg-[#565f4c]/5 dark:hover:bg-[#848d78]/10 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors"
          >
            Account verwalten
          </button>

          <SignOutButton>
            <button
              onClick={() => setIsOpen(false)}
              className="text-left px-4 py-2 text-sm text-[#565f4c]/80 dark:text-[#848d78]/80 hover:bg-[#565f4c]/5 dark:hover:bg-[#848d78]/10 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors"
            >
              Abmelden
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  );
}
