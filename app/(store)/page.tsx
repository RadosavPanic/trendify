import { use } from "react";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import EasterBanner from "@/components/EasterBanner";
import ProductsView from "@/components/Products/ProductsView";

export const dynamic = "force-static";
export const revalidate = 1800;

const Home = () => {
  const products = use(getAllProducts());
  const categories = use(getAllCategories());

  return (
    <div>
      <EasterBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
};

export default Home;
