"use client";

import { useEffect } from "react";

import { Product } from "@/sanity.types";
import PriceSelectorComponent from "../ui/selectors/price-selector";
import ProductGrid from "./ProductGrid";

import useProductsStore from "@/store/productsStore";

interface ProductsViewProps {
  productsArray: Product[];
}

const ProductsView = ({ productsArray }: ProductsViewProps) => {
  const { products, setProducts } = useProductsStore();

  useEffect(() => {
    setProducts(productsArray);
  }, [productsArray, setProducts]);

  return (
    <div className="flex flex-col sm:gap-4 sm:mx-0 lg:mx-40 mt-10">
      <hr className="my-1 border-gray-300" />
      <div className="w-[200px] flex flex-row gap-10">
        <PriceSelectorComponent />
      </div>
      <hr className="my-1 border-gray-300" />

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
