"use client";

import { useEffect } from "react";

import { Product } from "@/sanity.types";
import PriceSelectorComponent from "../ui/selectors/price-selector";
import ProductGrid from "./ProductGrid";

import useProductsStore from "@/store/productsStore";
import { Button } from "../ui/button";
import SortSelectorComponent from "../ui/selectors/sort-selector";

interface ProductsViewProps {
  productsArray: Product[];
}

const ProductsView = ({ productsArray }: ProductsViewProps) => {
  const { products, setProducts, resetAllFilters } = useProductsStore();

  useEffect(() => {
    setProducts(productsArray);
  }, [productsArray, setProducts]);

  return (
    <div className="flex flex-col sm:gap-4 sm:mx-0 lg:mx-40 mt-10">
      <hr className="my-1 border-gray-300" />
      <div className="w-[200px] flex flex-row gap-3">
        <SortSelectorComponent />
        <PriceSelectorComponent />
      </div>
      <hr className="my-1 border-gray-300" />
      <Button
        className="self-start sm:mt-0 md:-mt-4 bg-gray-100 text-black font-semibold hover:bg-gray-100 border-none shadow-none text-sm cursor-pointer"
        onClick={() => resetAllFilters()}
      >
        Reset All Filters
      </Button>

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
