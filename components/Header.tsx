"use client";

import { TrolleyIcon, SearchIcon } from "@sanity/icons";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import Form from "next/form";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import useCartStore from "@/store/store";
import { useState } from "react";

const Header = () => {
  const { user } = useUser();
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex w-full flex-wrap justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center space-x-2 text-blue-500">
        <Image src="/trendify.png" alt="trendify-logo" width={50} height={50} />
        <span className="family-lobster text-3xl hidden md:inline">
          Trendify
        </span>
      </Link>

      <div className="flex items-center space-x-3 mt-4 sm:mt-2 flex-1 justify-end">
        <Form
          action="/search"
          className="hidden lg:flex bg-gray-100 text-gray-800 rounded-full border mr-7"
        >
          <div className="relative group">
            <button
              type="submit"
              className="absolute rounded-full border-r-2 border-r-gray-300 group-hover:bg-gray-100 hover:bg-gray-200 hover:text-blue-500 cursor-pointer"
            >
              <SearchIcon className="w-9 h-9" />
            </button>
            <input
              type="text"
              name="query"
              className="peer font-light group-hover:bg-gray-200 hover:bg-gray-200 px-10 py-1 rounded-full border w-full max-w-4xl"
              placeholder="Search for products"
            />
          </div>
        </Form>

        <ClerkLoaded>
          {user ? (
            <div className="flex items-center space-x-2 -mr-2 md:mr-1 lg:mr-3">
              <UserButton />
              <div className="hidden md:block text-xs">
                <p className="text-gray-700">Welcome back</p>
                <p className="font-bold">{user?.fullName}</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <div className="flex items-center space-x-2 sm:-mr-2 lg:mr-4 cursor-pointer">
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
          className="relative group flex justify-center sm:justify-start sm:flex-none items-center -space-x-1 font-bold py-2 px-2 pr-1 pl-2.5 lg:px-2.5 rounded"
        >
          <TrolleyIcon className="w-10 h-10" />
          <span className="absolute top-1 -right-2 lg:top-1 lg:right-4 bg-black text-white group-hover:bg-blue-700 rounded-full w-6 h-4.5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
          <span className="hidden lg:inline text-sm pt-1">Cart</span>
        </Link>

        <div className="lg:hidden ml-3">
          {isMenuOpen ? (
            <IoClose className="w-[25px] h-[25px]" onClick={handleToggleMenu} />
          ) : (
            <GiHamburgerMenu
              className="w-[25px] h-[25px]"
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </div>

      <Form
        action="/search"
        className="block w-full lg:hidden mt-4 bg-gray-100 text-gray-800 rounded-full"
      >
        <div className="relative group">
          <button
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 rounded-full border-r-2 border-r-gray-300 group-hover:bg-gray-100 hover:bg-gray-200 hover:text-blue-500 cursor-pointer"
          >
            <SearchIcon className="w-11 h-11" />
          </button>
          <input
            type="text"
            name="query"
            className="peer font-semibold group-hover:bg-gray-200 hover:bg-gray-200 rounded-full border w-full pl-15 py-2"
            placeholder="Search for products"
          />
        </div>
      </Form>
    </header>
  );
};

export default Header;
