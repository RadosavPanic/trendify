import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  filterPriceUnder100: () => Product[];
  filterPrice100to150: () => Product[];
  filterPrice150to200: () => Product[];
  filterPriceOver200: () => Product[];
};

const useProductsStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      setProducts: (products: Product[]) => set({ products }),
      filterPriceUnder100: () =>
        get().products.filter((product) => product.price! < 100),
      filterPrice100to150: () =>
        get().products.filter(
          (product) => product.price! >= 100 && product.price! < 150
        ),
      filterPrice150to200: () =>
        get().products.filter(
          (product) => product.price! >= 150 && product.price! < 200
        ),
      filterPriceOver200: () =>
        get().products.filter((product) => product.price! >= 200),
    }),
    { name: "product-storage" }
  )
);

export default useProductsStore;
