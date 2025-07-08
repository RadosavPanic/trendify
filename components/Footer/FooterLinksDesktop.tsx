"use client";

import Link from "next/link";
import { footerMenuItems } from "@/constants";
import FollowUs from "./FollowUs";

const FooterLinksDesktop = () => {
  return (
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
  );
};

export default FooterLinksDesktop;
