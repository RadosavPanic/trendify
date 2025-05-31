"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FollowUs from "./FollowUs";
import { footerMenuItems, paymentMethods } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-300 mt-10">
      <div className="container hidden lg:grid grid-cols-4 mx-auto px-10 py-4 lg:py-20">
        {footerMenuItems.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.slug}
                    onClick={(e) => e.preventDefault()}
                    className="relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-black rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <FollowUs />
      </div>

      <div className="flex flex-col gap-4 lg:hidden p-5">
        <Accordion type="single" collapsible className="w-full">
          {footerMenuItems.map((section, idx) => (
            <AccordionItem value={`item-${idx}`} key={section.title}>
              <AccordionTrigger className="font-bold text-lg">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 text-base">
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.slug}
                        onClick={(e) => e.preventDefault()}
                        className="block py-1 px-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <FollowUs />
      </div>

      <div className="bg-gray-200 py-6 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.src}
              alt={method.name}
              title={method.name}
              width={50}
              height={50}
              className="w-[35px] md:w-[50px] h-auto"
            />
          ))}
        </div>
      </div>

      <div className="py-3 lg:py-2 flex flex-col items-center justify-center gap-4">
        <div className="w-full lg:px-0 lg:w-[60%] xl:w-1/2">
          <p className="text-center text-xs md:text-sm px-4">
            We strive to be as accurate as possible in product descriptions,
            image displays, and prices, but we cannot guarantee that all
            information is complete and error-free. All items displayed on the
            site are part of our offer and do not imply that they are available
            at all times. You can check the availability of goods by calling our
            Call Center.
          </p>
        </div>
        <p className="text-xs text-center">
          ©2025 Trendify, Inc. All rights reserved. Created by: Radosav Panic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
