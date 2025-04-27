import ProductsView from "@/components/Products/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { use } from "react";

const CategoryPage = ({ params }: SearchParamProps) => {
  const { slug } = use(params);

  const products = use(getProductsByCategory(slug));
  const categories = use(getAllCategories());

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <ProductsView
        productsArray={products}
        allCategories={categories}
        categorySlug={slug}
      />
    </div>
  );
};

export default CategoryPage;
