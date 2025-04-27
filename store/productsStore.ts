import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sortMap, priceMap } from "@/lib/utils";

export type ProductState = {
  products: Product[];
  originalProducts: Product[];
  activeFilters: string[];
  priceState: {
    priceUnder100: boolean;
    price100to150: boolean;
    price150to200: boolean;
    priceOver200: boolean;
  };
  sortState: {
    priceAscending: boolean;
    priceDescending: boolean;
    alphabetical: boolean;
  };
  setProducts: (products: Product[]) => void;

  setSortState: (key: keyof ProductState["sortState"], value: boolean) => void;
  setPriceState: (
    key: keyof ProductState["priceState"],
    value: boolean
  ) => void;

  sortByPriceAscending: () => void;
  sortByPriceDescending: () => void;
  sortByName: () => void;

  filterPriceUnder100: () => void;
  filterPrice100to150: () => void;
  filterPrice150to200: () => void;
  filterPriceOver200: () => void;

  applyPriceFilters: () => void;
  applySortFilter: () => void;

  resetSortState: () => void;
  resetPriceState: () => void;
  resetAllFilters: () => void;
};

const useProductsStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      originalProducts: [],
      activeFilters: [],

      priceState: {
        priceUnder100: false,
        price100to150: false,
        price150to200: false,
        priceOver200: false,
      },

      sortState: {
        priceAscending: false,
        priceDescending: false,
        alphabetical: false,
      },

      setProducts: (products: Product[]) =>
        set({ originalProducts: products, products: products }),

      setSortState: (key: keyof ProductState["sortState"], value: boolean) => {
        const { activeFilters, applySortFilter } = get();

        const newFilters = activeFilters.filter(
          (filter) =>
            !(filter in sortMap && sortMap[filter as keyof typeof sortMap])
        );

        set({
          sortState: {
            priceAscending: key === "priceAscending" && value,
            priceDescending: key === "priceDescending" && value,
            alphabetical: key === "alphabetical" && value,
          },
          activeFilters: value ? [...newFilters, sortMap[key]] : newFilters,
        });

        applySortFilter();
      },

      setPriceState: (key, value) => {
        const { activeFilters, applyPriceFilters } = get();

        const newFilters = activeFilters.filter(
          (filter) => filter !== priceMap[key]
        );

        set((state) => ({
          priceState: { ...state.priceState, [key]: value },
          activeFilters: value ? [...newFilters, priceMap[key]] : newFilters,
        }));

        applyPriceFilters();
      },

      sortByPriceAscending: () => {
        const { sortState, setSortState } = get();

        setSortState("priceAscending", !sortState.priceAscending);
      },

      sortByPriceDescending: () => {
        const { sortState, setSortState } = get();

        setSortState("priceDescending", !sortState.priceDescending);
      },

      sortByName: () => {
        const { sortState, setSortState } = get();

        setSortState("alphabetical", !sortState.alphabetical);
      },

      filterPriceUnder100: () => {
        const {
          priceState: { priceUnder100 },
          setPriceState,
        } = get();

        setPriceState("priceUnder100", !priceUnder100);
      },

      filterPrice100to150: () => {
        const {
          priceState: { price100to150 },
          setPriceState,
        } = get();

        setPriceState("price100to150", !price100to150);
      },

      filterPrice150to200: () => {
        const {
          priceState: { price150to200 },
          setPriceState,
        } = get();

        setPriceState("price150to200", !price150to200);
      },

      filterPriceOver200: () => {
        const {
          priceState: { priceOver200 },
          setPriceState,
        } = get();

        setPriceState("priceOver200", !priceOver200);
      },

      applySortFilter: () => {
        const { products, sortState } = get();

        if (sortState.priceAscending) {
          set({
            products: [...products].sort((a, b) => a.price! - b.price!),
          });
          return;
        }

        if (sortState.priceDescending) {
          set({
            products: [...products].sort((a, b) => b.price! - a.price!),
          });
          return;
        }

        if (sortState.alphabetical) {
          set({
            products: [...products].sort((a, b) =>
              a.name!.localeCompare(b.name!)
            ),
          });
          return;
        }
      },

      applyPriceFilters: () => {
        const {
          originalProducts,
          priceState: {
            priceUnder100,
            price100to150,
            price150to200,
            priceOver200,
          },
        } = get();

        if (
          !priceUnder100 &&
          !price100to150 &&
          !price150to200 &&
          !priceOver200
        ) {
          set({ products: originalProducts });
          return;
        }

        const filteredProducts: Product[] = [];

        if (priceUnder100)
          filteredProducts.push(
            ...originalProducts.filter((product) => product.price! < 100)
          );

        if (price100to150)
          filteredProducts.push(
            ...originalProducts.filter(
              (product) => product.price! >= 100 && product.price! < 150
            )
          );

        if (price150to200)
          filteredProducts.push(
            ...originalProducts.filter(
              (product) => product.price! >= 150 && product.price! < 200
            )
          );

        if (priceOver200)
          filteredProducts.push(
            ...originalProducts.filter((product) => product.price! >= 200)
          );

        if (!filteredProducts.length) {
          set({ products: originalProducts });
          return;
        }

        set({ products: filteredProducts });
      },

      resetSortState: () => {
        set({
          sortState: {
            priceAscending: false,
            priceDescending: false,
            alphabetical: false,
          },
        });
      },

      resetPriceState: () => {
        set({
          priceState: {
            priceUnder100: false,
            price100to150: false,
            price150to200: false,
            priceOver200: false,
          },
        });
      },

      resetAllFilters: () => {
        const { originalProducts, resetSortState, resetPriceState } = get();

        set({ products: originalProducts, activeFilters: [] });
        resetSortState();
        resetPriceState();
      },
    }),

    { name: "product-storage" }
  )
);

export default useProductsStore;
