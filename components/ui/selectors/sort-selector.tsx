"use client";

import {
  ChevronUp,
  ChevronDown,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";

import useProductsStore from "@/store/productsStore";
import { useState } from "react";

const SortSelectorComponent = () => {
  const {
    sortByPriceAscending,
    sortByPriceDescending,
    sortByNameAtoZ,
    sortByNameZtoA,
    sortState,
  } = useProductsStore();

  const [sortSelectorOpen, setSortSelectorOpen] = useState(false);

  const toggleSortSelectorOpen = () => {
    setSortSelectorOpen((prev) => !prev);
  };

  return (
    <Popover open={sortSelectorOpen} onOpenChange={setSortSelectorOpen}>
      <PopoverTrigger asChild>
        <Button
          size={null}
          aria-expanded={sortSelectorOpen}
          onClick={toggleSortSelectorOpen}
          className="relative flex sm:flex-none items-center bg-gray-100 text-black hover:bg-gray-100  border-black shadow-none font-semibold text-md ml-2 cursor-pointer"
        >
          Sort By
          {sortSelectorOpen ? (
            <ChevronUp className="mt-1 h-4 w-4 shrink-0" />
          ) : (
            <ChevronDown className="mt-1 h-4 w-4 shrink-0" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2 bg-white">
        <Command>
          <CommandList>
            <CommandItem
              onSelect={sortByPriceAscending}
              className={
                sortState.priceAscending ? "bg-blue-900 text-white" : ""
              }
            >
              <Label className="text-md flex w-full justify-between items-center">
                <span className="items-start">Price Asc</span>
                <ArrowUpNarrowWide
                  className={`h-4 w-4 items-end ${sortState.priceAscending && "text-white"}`}
                />
              </Label>
            </CommandItem>
            <CommandItem
              onSelect={sortByPriceDescending}
              className={
                sortState.priceDescending ? "bg-blue-900 text-white" : ""
              }
            >
              <Label className="text-md flex flex-row">
                <span className="items-center justify-start">Price Desc</span>
                <ArrowDownNarrowWide
                  className={`h-4 w-4 items-end ${sortState.priceDescending && "text-white"}`}
                />
              </Label>
            </CommandItem>
            <CommandItem
              onSelect={sortByNameAtoZ}
              className={sortState.alphabetical ? "bg-blue-900 text-white" : ""}
            >
              <Label className="text-md">Name A-Z</Label>
            </CommandItem>
            <CommandItem
              onSelect={sortByNameZtoA}
              className={
                sortState.reverseAlphabetical ? "bg-blue-900 text-white" : ""
              }
            >
              <Label className="text-md">Name Z-A</Label>
            </CommandItem>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortSelectorComponent;
