import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "next-sanity";
import AddToCartButton from "@/components/Cart/AddToCartButton";
import AddToFavouritesButton from "@/components/Cart/AddToFavouritesButton";

export const dynamic = "force-static";
export const revalidate = 1800;

const ProductPage = async ({ params }: SearchParamProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-0">{product.name}</h1>
            <h2 className="text-xl font-medium text-gray-500 mb-2">
              {product.subtitle}
            </h2>
            <div className="text-xl font-semibold mb-4">
              €{product.price?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-6">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Select Size</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {[
                  "EU 35.5",
                  "EU 36",
                  "EU 36.5",
                  "EU 37.5",
                  "EU 38",
                  "EU 38.5",
                  "EU 39",
                  "EU 40",
                  "EU 40.5",
                  "EU 41",
                  "EU 42",
                  "EU 42.5",
                  "EU 43",
                  "EU 44",
                  "EU 44.5",
                  "EU 45",
                  "EU 45.5",
                  "EU 46",
                  "EU 47",
                  "EU 47.5",
                  "EU 48.5",
                  "EU 50",
                ].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`
          border rounded-lg py-2 px-2 text-sm font-medium
          bg-white hover:bg-gray-100
          text-gray-700 hover:border hover:border-gray-500
          ${["EU 38", "EU 38.5", "EU 45", "EU 45.5", "EU 50"].includes(size) ? "opacity-50 cursor-not-allowed line-through" : "cursor-pointer"}
        `}
                    disabled={[
                      "EU 38",
                      "EU 38.5",
                      "EU 45",
                      "EU 45.5",
                      "EU 50",
                    ].includes(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <AddToCartButton product={product} disabled={isOutOfStock} />
              <AddToFavouritesButton
                product={product}
                disabled={isOutOfStock}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
