"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { imageUrl } from "@/lib/imageUrl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type FashionSliderProps = {
  images: string[];
};

const FashionSlider = ({ images }: FashionSliderProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const middleIndex = Math.floor(images.length / 2);

    api.scrollTo(middleIndex, true);
    setActiveSlide(middleIndex);

    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap());
    });
  }, [api, images.length]);

  return (
    <Carousel
      opts={{
        align: "center",
        slidesToScroll: 1,
        containScroll: "keepSnaps",
      }}
      setApi={setApi}
      className="w-full h-full py-2 px-6 md:px-10 xl:px-20"
    >
      <CarouselContent className="flex w-full gap-1">
        {images?.map((image, idx) => (
          <CarouselItem
            key={imageUrl(image).url()}
            className={`
            flex items-center justify-center
            basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5              
            aspect-square     
            transition-all
            duration-500 ease-in-out
             ${activeSlide === idx ? "scale-105 z-10 opacity-100" : "scale-85 opacity-70 grayscale"}            
            `}
          >
            <Image
              src={imageUrl(image).url()}
              alt="fashion-img"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              sizes="
                    (max-width: 420px) 50vw,
                    (max-width: 1024px) 33vw,
                    20vw
                    "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`
    ${activeSlide === 0 ? "grayscale opacity-70 cursor-default" : ""}
  `}
      />
      <CarouselNext
        className={`
    ${activeSlide === images.length - 1 ? "grayscale opacity-70 cursor-default" : ""}
  `}
      />
    </Carousel>
  );
};

export default FashionSlider;
