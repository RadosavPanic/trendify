import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeCase(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export const sortMap = {
  priceAscending: "priceAscending",
  priceDescending: "priceDescending",
  alphabetical: "alphabetical",
  reverseAlphabetical: "reverseAlphabetical",
} as const;

export const priceMap = {
  priceUnder100: "priceUnder100",
  price100to150: "price100to150",
  price150to200: "price150to200",
  priceOver200: "priceOver200",
} as const;

export const filterDisplayNames = {
  priceUnder100: "< €100",
  price100to150: "€100 - €150",
  price150to200: "€150 - €200",
  priceOver200: "> €200",
  priceAscending: "price asc",
  priceDescending: "price desc",
  alphabetical: "name a-z",
  reverseAlphabetical: "name z-a",
} as const;

export const featuredProductsLayoutMap = {
  categorySlug: {
    shoes: "featured-shoes",
    featured: "featured-products",
  },
  column: {
    normal: "flex-col",
    reversed: "flex-col-reverse",
  },
  row: {
    normal: "xl:flex-row",
    reversed: "xl:flex-row-reverse",
  },
} as const;
