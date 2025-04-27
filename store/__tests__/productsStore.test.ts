import { describe, it, expect, beforeEach } from "vitest";
import useProductsStore from "../productsStore";
import { Product } from "@/sanity.types";

const mockProducts: Product[] = [
  {
    _id: "1",
    _type: "product",
    _rev: "1",
    _createdAt: "2025-04-18T00:00:00Z",
    _updatedAt: "2025-04-22T00:00:00Z",
    name: "Product 1",
    slug: { _type: "slug", current: "product-1" },
    subtitle: "Product 1 Subtitle",
    image: {
      asset: {
        _ref: "product-1-image",
        _type: "reference",
        _weak: false,
      },
      _type: "image",
    },
    description: [
      {
        _type: "block",
        _key: "desc-1",
        children: [
          {
            _type: "span",
            _key: "span-1",
            text: "Description for Product 1",
          },
        ],
        style: "normal",
      },
    ],
    price: 89.99,
    categories: [
      {
        _ref: "category-1",
        _type: "reference",
        _weak: false,
        _key: "cat-1",
      },
    ],
    stock: 14,
  },
  {
    _id: "2",
    _type: "product",
    _rev: "2",
    _createdAt: "2025-04-15T00:00:00Z",
    _updatedAt: "2025-04-19T00:00:00Z",
    name: "Product 2",
    slug: { _type: "slug", current: "product-2" },
    subtitle: "Product 2 Subtitle",
    image: {
      asset: {
        _ref: "product-2-image",
        _type: "reference",
        _weak: false,
      },
      _type: "image",
    },
    description: [
      {
        _type: "block",
        _key: "desc-2",
        children: [
          {
            _type: "span",
            _key: "span-2",
            text: "Description for Product 2",
          },
        ],
        style: "normal",
      },
    ],
    price: 124.99,
    categories: [
      {
        _ref: "category-2",
        _type: "reference",
        _weak: false,
        _key: "cat-2",
      },
    ],
    stock: 11,
  },
  {
    _id: "3",
    _type: "product",
    _rev: "3",
    _createdAt: "2025-04-10T00:00:00Z",
    _updatedAt: "2025-04-12T00:00:00Z",
    name: "Product 3",
    slug: { _type: "slug", current: "product-3" },
    subtitle: "Product 3 Subtitle",
    image: {
      asset: {
        _ref: "product-3-image",
        _type: "reference",
        _weak: false,
      },
      _type: "image",
    },
    description: [
      {
        _type: "block",
        _key: "desc-3",
        children: [
          {
            _type: "span",
            _key: "span-3",
            text: "Description for Product 3",
          },
        ],
        style: "normal",
      },
    ],
    price: 179.99,
    categories: [
      {
        _ref: "category-3",
        _type: "reference",
        _weak: false,
        _key: "cat-3",
      },
    ],
    stock: 20,
  },
  {
    _id: "4",
    _type: "product",
    _rev: "4",
    _createdAt: "2025-04-15T00:00:00Z",
    _updatedAt: "2025-04-16T00:00:00Z",
    name: "Product 4",
    slug: { _type: "slug", current: "product-4" },
    subtitle: "Product 4 Subtitle",
    image: {
      asset: {
        _ref: "product-4-image",
        _type: "reference",
        _weak: false,
      },
      _type: "image",
    },
    description: [
      {
        _type: "block",
        _key: "desc-4",
        children: [
          {
            _type: "span",
            _key: "span-4",
            text: "Description for Product 4",
          },
        ],
        style: "normal",
      },
    ],
    price: 229.99,
    categories: [
      {
        _ref: "category-4",
        _type: "reference",
        _weak: false,
        _key: "cat-4",
      },
    ],
    stock: 8,
  },
];

describe("Products Store", () => {
  const { getState } = useProductsStore;

  beforeEach(() => {
    const { setProducts, setPriceState } = getState();
    setProducts(mockProducts);
    setPriceState("priceUnder100", false);
    setPriceState("price100to150", false);
    setPriceState("price150to200", false);
    setPriceState("priceOver200", false);
  });

  describe("Fundamentals", () => {
    it("should set products correctly", () => {
      const { products } = getState();
      expect(products).toEqual(mockProducts);
    });

    it("should toggle filter state correctly", () => {
      const { setPriceState } = getState();

      setPriceState("priceUnder100", true);
      expect(getState().priceState.priceUnder100).toBe(true);

      setPriceState("priceUnder100", false);
      expect(getState().priceState.priceUnder100).toBe(false);
    });
  });

  describe("Filter functions", () => {
    it("should filter products under €100", () => {
      const { filterPriceUnder100 } = getState();

      filterPriceUnder100();
      expect(getState().products).toEqual([mockProducts[0]]);
    });

    it("should filter products between €100 and €150", () => {
      const { filterPrice100to150 } = getState();

      filterPrice100to150();
      expect(getState().products).toEqual([mockProducts[1]]);
    });

    it("should filter products between €150 and €200", () => {
      const { filterPrice150to200 } = getState();

      filterPrice150to200();
      expect(getState().products).toEqual([mockProducts[2]]);
    });

    it("should filter products over €200", () => {
      const { filterPriceOver200 } = getState();

      filterPriceOver200();
      expect(getState().products).toEqual([mockProducts[3]]);
    });

    it("should apply multiple filters correctly", () => {
      const { setPriceState, applyPriceFilters } = getState();

      setPriceState("priceUnder100", true);
      setPriceState("priceOver200", true);
      applyPriceFilters();

      expect(getState().products).toEqual([mockProducts[0], mockProducts[3]]);
    });
  });
});
