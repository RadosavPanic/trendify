import { use } from "react";
import Image from "next/image";

import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";
import { imageUrl } from "@/lib/imageUrl";

const BrandList = () => {
  const bannerGroup = use(getBannerBySlug("banners-brands"));
  const { images } = bannerGroup[0];

  return (
    <div className="w-full overflow-x-auto mt-20 mx-6 lg:mx-4 py-2 px-2 md:px-10 xl:px-20">
      <div className="flex gap-8 py-4 px-2">
        {images?.map((src) => (
          <div
            key={imageUrl(src).url()}
            className="flex-shrink-0 w-28 h-16 bg-white rounded-lg shadow flex items-center justify-center"
          >
            <Image
              src={imageUrl(src).url()}
              alt="Brand image"
              width={100}
              height={65}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
