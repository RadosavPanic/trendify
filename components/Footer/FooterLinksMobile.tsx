"use client";

import Link from "next/link";
import { footerMenuItems } from "@/constants";
import FollowUs from "./FollowUs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterLinksMobile = () => {
  return (
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
  );
};

export default FooterLinksMobile;
