"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon, SearchIcon } from "@sanity/icons";
import useCartStore from "@/store/store";

const Header = () => {
  const { user } = useUser();
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="flex w-full flex-wrap justify-between items-center px-4 py-2">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
      >
        Trendify
      </Link>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
        {/* <div className="w-full border border-amber-800 sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0 flex justify-end"> */}
        <Form action="/search" className="hidden lg:flex">
          <button
            type="submit"
            className="absolute text-gray-500 hover:text-blue-500 cursor-pointer"
          >
            <SearchIcon className="w-11 h-11" />
          </button>
          <input
            type="text"
            name="query"
            className="bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200/80 px-13 py-2 rounded-full border w-full max-w-4xl"
            placeholder="Search for products"
          />
        </Form>

        <Link
          href="/cart"
          className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <TrolleyIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
          <span>My Cart</span>
        </Link>

        <ClerkLoaded>
          <SignedIn>
            <Link
              href="/orders"
              className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>
          </SignedIn>

          {user ? (
            <div className="flex items-center space-x-2">
              <UserButton />

              <div className="hidden md:block text-xs font-bold">
                <p>{user?.fullName?.split(" ")[0]}</p>
                <p>{user?.fullName?.split(" ")[1]}</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
        </ClerkLoaded>
      </div>

      <Form action="/search" className="block w-full lg:hidden mt-4">
        <div className="relative">
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 cursor-pointer"
          >
            <SearchIcon className="w-11 h-11" />
          </button>
          <input
            type="text"
            name="query"
            className="bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200/80 pl-15 py-2 rounded-full border w-full"
            placeholder="Search for products"
          />
        </div>
      </Form>
    </header>
  );
};

export default Header;
