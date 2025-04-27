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
} as const;

export const priceMap = {
  priceUnder100: "priceUnder100",
  price100to150: "price100to150",
  price150to200: "price150to200",
  priceOver200: "priceOver200",
} as const;
