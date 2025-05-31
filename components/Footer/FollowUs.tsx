"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-1">Follow Us</h3>
      <p className="mb-3">
        Follow us here and stay tuned with all our news, promotions and offers.
      </p>
      <div className="flex gap-4">
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer"
        >
          <FaFacebook className="h-8 w-8" />
        </Link>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-gray-300 rounded-sm p-2  hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer"
        >
          <FaInstagram className="h-8 w-8" />
        </Link>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer"
        >
          <FaYoutube className="h-8 w-8" />
        </Link>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer"
        >
          <FaLinkedin className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;
