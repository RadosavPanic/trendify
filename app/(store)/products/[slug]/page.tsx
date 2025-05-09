import { use } from "react";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import ProductsView from "@/components/Products/ProductsView";

const Products = ({ params }: SearchParamProps) => {
  const { slug } = use(params);

  const products = use(searchProductsByName(slug));

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <ProductsView productsArray={products} />
    </div>
  );
};

export default Products;
