"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";

import useProductsStore from "@/store/productsStore";

const PriceSelectorComponent = () => {
  const {
    filterPriceUnder100,
    filterPrice100to150,
    filterPrice150to200,
    filterPriceOver200,
    priceSelectorOpen,
    togglePriceSelectorOpen,
    priceFilterState,
  } = useProductsStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={priceSelectorOpen}
          onSelect={togglePriceSelectorOpen}
          className="w-full max-w-full relative flex sm:flex-none items-center bg-gray-100 text-black font-bold py-2 px-4 border-none shadow-none cursor-pointer"
        >
          Shop By Price
          {priceSelectorOpen ? (
            <ChevronDown className="mt-1 h-4 w-4 shrink-0" />
          ) : (
            <ChevronUp className="mt-1 h-4 w-4 shrink-0" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandList>
            <CommandItem onSelect={() => filterPriceUnder100()}>
              <Checkbox
                id="chkPriceUnder100"
                checked={priceFilterState.priceUnder100}
              />
              <Label htmlFor="chkPriceUnder100">Under €100</Label>
            </CommandItem>
            <CommandItem onSelect={() => filterPrice100to150()}>
              <Checkbox
                id="chkPrice100to150"
                checked={priceFilterState.price100to150}
              />
              <Label htmlFor="chkPrice100to150">€100 - €150</Label>
            </CommandItem>
            <CommandItem onSelect={() => filterPrice150to200()}>
              <Checkbox
                id="chkPrice150to200"
                checked={priceFilterState.price150to200}
              />
              <Label htmlFor="chkPrice150to200">€150 - €200</Label>
            </CommandItem>
            <CommandItem onSelect={() => filterPriceOver200()}>
              <Checkbox
                id="chkPriceOver200"
                checked={priceFilterState.priceOver200}
              />
              <Label htmlFor="chkPriceOver200">Over €200</Label>
            </CommandItem>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PriceSelectorComponent;
