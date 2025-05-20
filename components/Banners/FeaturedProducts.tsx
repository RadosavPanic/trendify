import Link from "next/link";
import Image from "next/image";
import { Product } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { use } from "react";

type FeaturedProductsProps = {
  category: "shoes" | "featured";
  columnLayout?: "normal" | "reversed";
  rowLayout?: "normal" | "reversed";
};

const layoutMap = {
  categoryChoice: {
    shoes: "featured-shoes",
    featured: "featured-products",
  },
  column: {
    normal: "flex-col",
    reversed: "flex-col-reverse",
  },
  row: {
    normal: "xl:flex-row",
    reversed: "xl:flex-row-reverse",
  },
} as const;

const FeaturedProducts = ({
  category,
  columnLayout = "normal",
  rowLayout = "normal",
}: FeaturedProductsProps) => {
  const products: Product[] = use(
    getProductsByCategory(layoutMap.categoryChoice[category])
  ).slice(0, 4);

  return (
    <div
      className={`flex ${layoutMap.column[columnLayout]} ${layoutMap.row[rowLayout]} justify-between items-center mt-10 sm:mt-20 xl:mt-40 gap-8 sm:gap-14 xl:gap-28 pb-20`}
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
              ? "/nikeairmax-banner.jpeg"
              : "/newarrivals-banner.jpeg"
          }
          alt="air max dn8"
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
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={imageUrl(product.image!).url()}
                  alt={product.name || "Product image"}
                  fill
                  className="object-contain"
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
