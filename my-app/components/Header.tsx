import { ClerkLoaded, Show, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Menu } from "lucide-react";
import CustomProfileButton from "@/components/CustomProfileButton";
import MobileMenu from "@/components/MobileMenu";

const Header = async () => {
  const user = await currentUser();
  console.log(user);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-[#1b1c19]/80 backdrop-blur-md">
      <div className="flex justify-between items-center relative px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="w-auto md:w-1/3 flex items-center gap-12 md:gap-0 justify-start">
          <MobileMenu />
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
          <ClerkLoaded>
            <Show when="signed-in">
              {/* Dein eigenes Icon, das nun das Clerk Menü öffnet! */}
              <CustomProfileButton />
            </Show>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <a className="text-[#565f4c]/70 dark:text-[#848d78]/70 hover:text-[#565f4c] dark:hover:text-[#848d78] transition-colors duration-300 cursor-pointer">
                  Log-in
                </a>
              </SignInButton>
            </Show>
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
};

export default Header;
