"use client";

import { useEffect } from "react";

import { Category, Product } from "@/sanity.types";
import useProductsStore from "@/store/productsStore";

import PriceSelectorComponent from "../ui/selectors/price-selector";
import SortSelectorComponent from "../ui/selectors/sort-selector";
import { Button } from "../ui/button";

import ProductGrid from "./ProductGrid";
import ActiveFilterBadge from "../ActiveFilterBadge";

interface ProductsViewProps {
  productsArray: Product[];
  allCategories?: Category[];
  categorySlug?: string;
}

const ProductsView = ({
  productsArray,
  allCategories,
  categorySlug,
}: ProductsViewProps) => {
  const {
    products,
    setProducts,
    resetAllFilters,
    applyPriceFilters,
    applySortFilter,
  } = useProductsStore();

  useEffect(() => {
    setProducts(productsArray);

    applyPriceFilters();
    applySortFilter();
  }, [productsArray, setProducts, applyPriceFilters, applySortFilter]);

  const selectedCategory = allCategories?.find(
    (category) => category?.slug?.current === categorySlug
  );

  return (
    <div className="flex flex-col sm:gap-4 sm:mx-0 lg:mx-40 mt-10">
      <div className="sm:w-full xl:w-1/2 flex flex-col items-start justify-center gap-2 ml-1 mb-2">
        {selectedCategory && (
          <p className="font-normal">{selectedCategory?.description}</p>
        )}
      </div>
      <hr className="border-gray-300" />
      <div className="w-full flex flex-row gap-3">
        <SortSelectorComponent />
        <PriceSelectorComponent />
      </div>
      <hr className="border-gray-300" />
      <Button
        size={null}
        className="self-start sm:mt-0 md:-mt-4 bg-gray-100 text-black font-semibold hover:bg-gray-100 border-none shadow-none text-sm py-1 px-1 cursor-pointer"
        onClick={() => resetAllFilters()}
      >
        Reset All Filters
      </Button>
      <ActiveFilterBadge />

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
