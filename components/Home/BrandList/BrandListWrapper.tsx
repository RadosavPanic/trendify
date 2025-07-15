import { use } from "react";
import { imageUrl } from "@/lib/imageUrl";
import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";

import BrandList from "./BrandList";

const BrandListWrapper = () => {
  const bannerGroup = use(getBannerBySlug("banners-brands"));
  const images =
    bannerGroup[0]?.images?.map((img) => imageUrl(img).url()) || [];

  if (!images.length) return;

  return <BrandList images={images} />;
};

export default BrandListWrapper;
