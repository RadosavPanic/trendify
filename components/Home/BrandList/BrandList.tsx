"use client";

import { useRef } from "react";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

type BrandListProps = {
  images: string[];
};

const BrandList = ({ images }: BrandListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    document.body.style.cursor = "";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = "";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="relative w-full my-16 py-6 px-6 lg:px-20 xl:px-24  overflow-hidden bg-gradient-to-r from-blue-500 via-orange-400 to-blue-400 shiny-overlay">
      <div
        className="overflow-x-scroll scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: "grab", userSelect: "none" }}
      >
        <div className="flex gap-0 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-44 py-4 px-0">
          {images?.map((src) => (
            <div
              key={imageUrl(src).url()}
              className="flex-shrink-0 flex items-center justify-center w-28 h-16 bg-transparent my-6"
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
    </div>
  );
};

export default BrandList;
