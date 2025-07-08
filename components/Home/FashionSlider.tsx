import { use } from "react";
import Image from "next/image";

import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";
import { imageUrl } from "@/lib/imageUrl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FashionSlider = () => {
  const bannerGroup = use(getBannerBySlug("banners-fashion"));
  const { images } = bannerGroup[0];

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
        loop: true,
      }}
      className="w-full h-full py-2 px-2 md:px-10 xl:px-20"
    >
      <CarouselContent className="flex w-full gap-0.5">
        {images?.map((image) => (
          <CarouselItem
            key={imageUrl(image).url()}
            className="
              flex items-center justify-center
              basis-1/3 lg:basis-1/5              
              aspect-square     
              transition-all
            "
          >
            <Image
              src={imageUrl(image).url()}
              alt="fashion-img"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              sizes="
                (max-width: 640px) 33vw,
                (max-width: 1024px) 33vw,
                20vw
              "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FashionSlider;
