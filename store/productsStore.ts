import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductState = {
  products: Product[];
  originalProducts: Product[];
  priceFilterState: {
    priceUnder100: boolean;
    price100to150: boolean;
    price150to200: boolean;
    priceOver200: boolean;
  };
  setProducts: (products: Product[]) => void;
  setPriceFilterState: (
    key: keyof ProductState["priceFilterState"],
    value: boolean
  ) => void;
  filterPriceUnder100: () => void;
  filterPrice100to150: () => void;
  filterPrice150to200: () => void;
  filterPriceOver200: () => void;
  applyFilters: () => void;
  resetAllFilters: () => void;
};

const useProductsStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      originalProducts: [],
      priceFilterState: {
        priceUnder100: false,
        price100to150: false,
        price150to200: false,
        priceOver200: false,
      },
      setProducts: (products: Product[]) =>
        set({ originalProducts: products, products: products }),

      setPriceFilterState: (key, value) =>
        set((state) => ({
          priceFilterState: { ...state.priceFilterState, [key]: value },
        })),

      filterPriceUnder100: () => {
        const {
          priceFilterState: { priceUnder100 },
          setPriceFilterState,
          applyFilters,
        } = get();
        setPriceFilterState("priceUnder100", !priceUnder100);
        applyFilters();
      },
      filterPrice100to150: () => {
        const {
          priceFilterState: { price100to150 },
          setPriceFilterState,
          applyFilters,
        } = get();
        setPriceFilterState("price100to150", !price100to150);
        applyFilters();
      },
      filterPrice150to200: () => {
        const {
          priceFilterState: { price150to200 },
          setPriceFilterState,
          applyFilters,
        } = get();
        setPriceFilterState("price150to200", !price150to200);
        applyFilters();
      },
      filterPriceOver200: () => {
        const {
          priceFilterState: { priceOver200 },
          setPriceFilterState,
          applyFilters,
        } = get();
        setPriceFilterState("priceOver200", !priceOver200);
        applyFilters();
      },
      applyFilters: () => {
        const { priceFilterState, originalProducts } = get();

        const allFiltersFalse =
          !priceFilterState.priceUnder100 &&
          !priceFilterState.price100to150 &&
          !priceFilterState.price150to200 &&
          !priceFilterState.priceOver200;

        if (allFiltersFalse) {
          set({ products: originalProducts });
          return;
        }

        const filteredProducts: Product[] = [];

        if (priceFilterState.priceUnder100) {
          const filteredUnder100 = originalProducts.filter(
            (product: Product) => product.price! < 100
          );
          filteredProducts.push(...filteredUnder100);
        }

        if (priceFilterState.price100to150) {
          const filtered100to150 = originalProducts.filter(
            (product: Product) => product.price! >= 100 && product.price! < 150
          );
          filteredProducts.push(...filtered100to150);
        }

        if (priceFilterState.price150to200) {
          const filtered150to200 = originalProducts.filter(
            (product: Product) => product.price! >= 150 && product.price! < 200
          );
          filteredProducts.push(...filtered150to200);
        }

        if (priceFilterState.priceOver200) {
          const filteredOver200 = originalProducts.filter(
            (product: Product) => product.price! >= 200
          );
          filteredProducts.push(...filteredOver200);
        }

        if (filteredProducts.length === 0) {
          set({ products: originalProducts });
          return;
        }

        set({ products: filteredProducts });
      },
      resetAllFilters: () => {
        const { originalProducts } = get();
        set({
          products: originalProducts,
          priceFilterState: {
            priceUnder100: false,
            price100to150: false,
            price150to200: false,
            priceOver200: false,
          },
        });
      },
    }),

    { name: "product-storage" }
  )
);

export default useProductsStore;
