"use client";

import { useEffect, useState, useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import Image1 from "@/public/banner-pic-1.jpg";
import Image2 from "@/public/banner-pic-2.jpg";
import Image3 from "@/public/banner-pic-3.jpg";
import { Progress } from "../ui/progress";

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const images = [Image1, Image2, Image3];

  useEffect(() => {
    if (!api) return;

    const autoplayDelay = 5000;
    let startTime = Date.now();

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      startTime = Date.now();
      setProgress(0);
    });

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / autoplayDelay) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) requestAnimationFrame(updateProgress);
    };

    updateProgress();

    return () => {
      api.off("select", updateProgress);
    };
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="relative w-full h-full overflow-hidden"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              alt="carousel image"
              src={src}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 max-w-[400px] flex space-x-1">
        {images.map((_, index) => (
          <Progress
            key={index}
            value={index === current ? progress : 0}
            className="h-1 flex-1 mx-1 bg-gray-300"
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
