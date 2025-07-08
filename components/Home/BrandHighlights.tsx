import { use } from "react";
import Image from "next/image";
import Link from "next/link";

import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";
import { imageUrl } from "@/lib/imageUrl";

const BrandHighlights = () => {
  const bannerGroup = use(getBannerBySlug("banners-highlights"));
  const images = bannerGroup[0]?.images || [];

  return (
    <div className="mt-0 lg:mt-20 mx-4 sm:mx-10 xl:mx-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <Link
        href="/categories/nike-sportswear"
        className="group flex flex-col items-start text-start"
      >
        <div className="w-full h-full overflow-hidden">
          <Image
            src={imageUrl(images[0]).url()}
            alt="Nike"
            width={557}
            height={557}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-2 text-xl font-bold">Nike Sportswear</h3>
        <p className="text-lg text-gray-600">
          Always in motion, always on trend.
        </p>
      </Link>
      <Link
        href="/categories/new-balance"
        className="group flex flex-col items-start text-start mt-10 lg:mt-0"
      >
        <div className="w-full h-full overflow-hidden">
          <Image
            src={imageUrl(images[1]).url()}
            alt="New Balance"
            width={557}
            height={557}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-2 text-xl font-bold">New Balance</h3>
        <p className="text-lg text-gray-600">Comfort you can count on.</p>
      </Link>
      <Link
        href="/categories/adidas"
        className="group flex flex-col items-start text-start my-10 lg:my-0"
      >
        <div className="w-full h-full overflow-hidden">
          <Image
            src={imageUrl(images[2]).url()}
            alt="highlight image"
            width={557}
            height={557}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-2 text-xl font-bold">Level Up with Adidas</h3>
        <p className="text-lg text-gray-600">Stay sharp, stay confident.</p>
      </Link>
    </div>
  );
};

export default BrandHighlights;
