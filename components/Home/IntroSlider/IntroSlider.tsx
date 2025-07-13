"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Progress } from "@/components/ui/progress";

type IntroSliderProps = {
  imagesLg: string[];
  imagesSm: string[];
};

const IntroSlider = ({ imagesLg, imagesSm }: IntroSliderProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const [images, setImages] = useState(imagesLg);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth < 768) {
        setImages(imagesSm);
      } else {
        setImages(imagesLg);
      }
    };

    updateImages();
    window.addEventListener("resize", updateImages);

    return () => {
      window.removeEventListener("resize", updateImages);
    };
  }, []);

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
              width={1920}
              height={812}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 flex space-x-1">
        {images.map((_, index) => (
          <Progress
            key={index}
            value={index === current ? progress : 0}
            className="h-0.5 flex-1 mx-1 bg-gray-300"
          />
        ))}
      </div>
    </Carousel>
  );
};

export default IntroSlider;
