import { use } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";

import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { getBannerBySlug } from "@/sanity/lib/banners/getBannerBySlug";

import { featuredProductsLayoutMap } from "@/lib/utils";

type FeaturedProductsProps = {
  category: "shoes" | "featured";
  columnLayout?: "normal" | "reversed";
  rowLayout?: "normal" | "reversed";
};

const FeaturedProducts = ({
  category,
  columnLayout = "normal",
  rowLayout = "normal",
}: FeaturedProductsProps) => {
  const { categorySlug, column, row } = featuredProductsLayoutMap;

  const products: Product[] = use(
    getProductsByCategory(categorySlug[category])
  ).slice(0, 4);
  const bannerGroup = use(getBannerBySlug("banners-featured"));

  const images = bannerGroup[0]?.images || [];

  return (
    <div
      className={`flex ${column[columnLayout]} ${row[rowLayout]} justify-between items-center mt-10 sm:mt-20 xl:mt-40 gap-8 sm:gap-14 xl:gap-28 pb-10`}
    >
      <Link
        href={
          category === "shoes"
            ? "/products/air-max-dn8"
            : "/categories/new-arrivals"
        }
        className="flex-shrink-0 w-full xl:w-1/2 p-2 sm:p-10 2xl:p-20"
      >
        <Image
          src={
            category === "shoes"
              ? imageUrl(images[0]).url()
              : imageUrl(images[1]).url()
          }
          alt="featured image"
          width={700}
          height={800}
          className="w-full h-auto object-cover"
        />
      </Link>

      <div className="grid grid-cols-2 gap-6 w-full p-4 xl:p-10">
        {products.map((product) => (
          <div
            className="relative bg-transparent mx-0 sm:mx-2 md:mx-5 lg:mx-10 my-10 xl:mb-10"
            key={product._id}
          >
            <Link href={`/product/${product.slug?.current}`}>
              <div className="group relative aspect-square w-full overflow-hidden">
                <Image
                  src={imageUrl(product.image!).url()}
                  alt={product.name || "Product image"}
                  fill
                  className={`object-contain transition-transform duration-600 group-hover:scale-110 ${category === "shoes" && "group-hover:rotate-5"}`}
                />
                <span className="absolute top-4 left-0 bg-blue-500 text-white text-xs font-bold px-2 py-1">
                  NEW
                </span>
              </div>
              <p className="text-gray-600 text-center font-semibold text-base mt-4">
                €{product.price?.toFixed(2)}
              </p>
              <h3 className="mt-3 text-base text-center font-bold text-gray-800">
                {product.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
