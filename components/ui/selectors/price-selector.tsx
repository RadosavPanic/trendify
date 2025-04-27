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
import { useState } from "react";

const PriceSelectorComponent = () => {
  const {
    filterPriceUnder100,
    filterPrice100to150,
    filterPrice150to200,
    filterPriceOver200,
    priceState,
  } = useProductsStore();

  const [priceSelectorOpen, setPriceSelectorOpen] = useState(false);

  const togglePriceSelectorOpen = () => {
    setPriceSelectorOpen((prev) => !prev);
  };

  return (
    <Popover open={priceSelectorOpen} onOpenChange={setPriceSelectorOpen}>
      <PopoverTrigger asChild>
        <Button
          size={null}
          aria-expanded={priceSelectorOpen}
          onClick={togglePriceSelectorOpen}
          className="relative flex sm:flex-none items-center bg-gray-100 text-black hover:bg-gray-100  border-black shadow-none font-semibold text-md py-1 ml-2 cursor-pointer"
        >
          Shop By Price
          {priceSelectorOpen ? (
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
              onSelect={() => {
                filterPriceUnder100();
                document.getElementById("chkPriceUnder100")?.click();
              }}
            >
              <Checkbox
                id="chkPriceUnder100"
                checked={priceState.priceUnder100}
                onCheckedChange={() => filterPriceUnder100()}
              />
              <Label htmlFor="chkPriceUnder100" className="text-sm">
                Under €100
              </Label>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                filterPrice100to150();
                document.getElementById("chkPrice100to150")?.click();
              }}
            >
              <Checkbox
                id="chkPrice100to150"
                checked={priceState.price100to150}
                onCheckedChange={() => filterPrice100to150()}
              />
              <Label htmlFor="chkPrice100to150" className="text-sm">
                €100 - €150
              </Label>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                filterPrice150to200();
                document.getElementById("chkPrice150to200")?.click();
              }}
            >
              <Checkbox
                id="chkPrice150to200"
                checked={priceState.price150to200}
                onCheckedChange={() => filterPrice150to200()}
              />
              <Label htmlFor="chkPrice150to200" className="text-sm">
                €150 - €200
              </Label>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                filterPriceOver200();
                document.getElementById("chkPriceOver200")?.click();
              }}
            >
              <Checkbox
                id="chkPriceOver200"
                checked={priceState.priceOver200}
                onCheckedChange={() => filterPriceOver200()}
              />
              <Label htmlFor="chkPriceOver200" className="text-sm">
                Over €200
              </Label>
            </CommandItem>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PriceSelectorComponent;
