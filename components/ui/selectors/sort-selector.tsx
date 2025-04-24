"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

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
  const { sortByPriceAscending, sortByPriceDescending, sortByName, sortState } =
    useProductsStore();

  const [sortSelectorOpen, setSortSelectorOpen] = useState(false);

  const togglePriceSelectorOpen = () => {
    setSortSelectorOpen((prev) => !prev);
  };

  return (
    <Popover open={sortSelectorOpen} onOpenChange={setSortSelectorOpen}>
      <PopoverTrigger asChild>
        <Button
          size={null}
          aria-expanded={sortSelectorOpen}
          onClick={togglePriceSelectorOpen}
          className="w-36 relative flex sm:flex-none items-center bg-gray-100 text-black hover:bg-gray-100  border-black shadow-none font-semibold text-md py-1 cursor-pointer"
        >
          Sort By
          {sortSelectorOpen ? (
            <ChevronUp className="mt-1 h-4 w-4 shrink-0" />
          ) : (
            <ChevronDown className="mt-1 h-4 w-4 shrink-0" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2">
        <Command>
          <CommandList>
            <CommandItem
              onSelect={sortByPriceAscending}
              className={
                sortState.priceAscending ? "bg-gray-600 text-white" : ""
              }
            >
              <Label className="text-sm">Price Ascending</Label>
            </CommandItem>
            <CommandItem
              onSelect={sortByPriceDescending}
              className={
                sortState.priceDescending ? "bg-gray-600 text-white" : ""
              }
            >
              <Label className="text-sm">Price Descending</Label>
            </CommandItem>
            <CommandItem
              onSelect={sortByName}
              className={sortState.alphabetical ? "bg-gray-600 text-white" : ""}
            >
              <Label className="text-sm">Alphabetical</Label>
            </CommandItem>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortSelectorComponent;
