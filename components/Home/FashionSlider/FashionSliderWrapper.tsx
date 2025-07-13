import { use } from "react";
import FashionSlider from "./FashionSlider";
import { imageUrl } from "@/lib/imageUrl";
import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";

const FashionSliderWrapper = () => {
  const bannerGroup = use(getBannerBySlug("banners-fashion"));
  const images =
    bannerGroup[0]?.images?.map((img) => imageUrl(img).url()) || [];

  if (!images.length) return;

  return <FashionSlider images={images} />;
};

export default FashionSliderWrapper;
