import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { footerMenuItems, paymentMethods } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
        {footerMenuItems.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.slug} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-1">
          <h3 className="font-bold text-lg mb-1">Follow Us</h3>
          <p className="mb-3">
            Follow us here and stay tuned with all our news, promotions and
            offers.
          </p>
          <div className="flex gap-4">
            <div className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer">
              <FaFacebook size={24} />
            </div>
            <div className="border border-gray-300 rounded-sm p-2  hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer">
              <FaInstagram size={24} />
            </div>
            <div className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer">
              <FaYoutube size={24} />
            </div>
            <div className="border border-gray-300 rounded-sm p-2 hover:text-blue-500 hover:border-blue-500 transition duration-400  cursor-pointer">
              <FaLinkedin size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-6 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.src}
              alt={method.name}
              title={method.name}
              width={method.width}
              height={method.height}
            />
          ))}
        </div>
      </div>

      <div className="py-6 lg:py-2 flex flex-col items-center justify-center gap-4">
        <div className="w-full px-6 lg:px-0 lg:w-1/2">
          <p className="text-center text-sm px-4">
            We strive to be as accurate as possible in product descriptions,
            image displays, and prices, but we cannot guarantee that all
            information is complete and error-free. All items displayed on the
            site are part of our offer and do not imply that they are available
            at all times. You can check the availability of goods by calling our
            Call Center.
          </p>
        </div>
        <p className="text-sm font-semibold px-4">
          ©2025 Trendify, Inc. All rights reserved. Created by: Radosav Panic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
