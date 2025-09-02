import { use } from "react";
import Image from "next/image";

import { imageUrl } from "@/lib/imageUrl";
import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";

import FooterLinksDesktop from "./FooterLinksDesktop";
import FooterLinksMobile from "./FooterLinksMobile";

const Footer = () => {
  const bannerGroup = use(getBannerBySlug("banners-payments"));
  const images = bannerGroup[0]?.images || [];

  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-300 mt-10">
      <FooterLinksDesktop />

      <FooterLinksMobile />

      <div className=" py-6 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <Image
              key={`payment-method-${index}`}
              src={imageUrl(image).url()}
              alt="payment method image"
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
        <p className="text-xs font-semibold text-center">
          ©2025 Trendify, Inc. All rights reserved. Created by: Radosav Panic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
