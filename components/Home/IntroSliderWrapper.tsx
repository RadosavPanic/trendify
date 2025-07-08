import { use } from "react";

import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";
import { imageUrl } from "@/lib/imageUrl";

import IntroSlider from "./IntroSlider";

const IntroSliderWrapper = () => {
  const bannerGroup = use(getBannerBySlug("banners-intro"));
  const images =
    bannerGroup[0]?.images?.map((img) => imageUrl(img).url()) || [];

  if (!images.length) return;

  const imagesLg = images.slice(0, 3);
  const imagesSm = images.slice(3, 6);

  return <IntroSlider imagesLg={imagesLg} imagesSm={imagesSm} />;
};

export default IntroSliderWrapper;
