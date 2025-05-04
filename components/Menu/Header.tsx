"use client";

import { TrolleyIcon, SearchIcon } from "@sanity/icons";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import MenuContainer from "./MenuContainer";
import MenuView from "./MenuView";
import SearchMenu from "./SearchMenu";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import useCartStore from "@/store/cartStore";
import { useState } from "react";

const Header = () => {
  const { user } = useUser();

  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleToggleSearchMenu = () => {
    setIsSearchMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isSearchMenuOpen && (
        <SearchMenu
          isSearchMenuOpen={isSearchMenuOpen}
          handleToggleSearchMenu={handleToggleSearchMenu}
        />
      )}

      <header className="headerElement relative flex w-full flex-wrap justify-between items-center h-16 px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 h-16 text-blue-500"
        >
          <Image
            src="/trendify.png"
            alt="trendify-logo"
            width={50}
            height={50}
          />
          <span className="family-lobster text-3xl hidden md:inline">
            Trendify
          </span>
        </Link>

        <MenuContainer />

        <MenuView />

        <div className="flex items-center space-x-3 h-16 flex-1 justify-end">
          <div
            className="flex bg-gray-100 text-gray-800 hover:bg-gray-200 border rounded-full mr-4 cursor-pointer"
            onClick={handleToggleSearchMenu}
          >
            <SearchIcon className="w-9 h-9" />
          </div>

          <ClerkLoaded>
            {user ? (
              <div className="flex items-center space-x-2 mr-0 lg:mr-3">
                <UserButton />
                <div className="hidden lg:block text-xs">
                  <p className="text-gray-700">Welcome back</p>
                  <p className="font-bold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center sm:space-x-0 md:space-x-2 sm:mr-4 lg:mr-4 cursor-pointer">
                  <FaRegUser className="w-6 h-6" />
                  <div className="hidden md:block text-xs">
                    <p className="text-gray-700">Welcome</p>
                    <p className="font-bold">Sign in / register</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>

          <Link
            href="/cart"
            className="relative group flex justify-center sm:justify-start sm:flex-none items-center -space-x-1 font-bold py-2 px-2 pr-1 pl-0 rounded"
          >
            <TrolleyIcon className="w-10 h-10" />
            <span className="absolute top-1 -right-2 lg:top-1 lg:right-2.5 bg-black text-white group-hover:bg-blue-700 rounded-full w-6 h-4.5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span className="hidden lg:inline text-sm pt-1">Cart</span>
          </Link>

          <div className="lg:hidden ml-3">
            {isMobileMenuOpen ? (
              <IoClose
                className="w-[25px] h-[25px]"
                onClick={handleToggleMobileMenu}
              />
            ) : (
              <GiHamburgerMenu
                className="w-[25px] h-[25px]"
                onClick={handleToggleMobileMenu}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
