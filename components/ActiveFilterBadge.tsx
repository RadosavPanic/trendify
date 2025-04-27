import { Badge } from "./ui/badge";
import useProductsStore from "@/store/productsStore";
import { priceMap, sortMap, filterDisplayNames } from "@/lib/utils";

const ActiveFilterBadge = () => {
  const { activeFilters, setPriceState, setSortState, applyPriceFilters } =
    useProductsStore((state) => state);

  const removeFilter = (filter: string) => {
    if (filter in priceMap) {
      setPriceState(priceMap[filter as keyof typeof priceMap], false);
    }

    if (filter in sortMap) {
      setSortState(sortMap[filter as keyof typeof sortMap], false);
    }

    applyPriceFilters();
  };

  const getDisplayName = (filter: string) => {
    return (
      filterDisplayNames[filter as keyof typeof filterDisplayNames] || filter
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {activeFilters.map((filter) => (
        <Badge
          variant="outline"
          className="bg-blue-900 text-white cursor-pointer"
          key={filter}
          onClick={() => removeFilter(filter)}
        >
          {getDisplayName(filter)} <span className="ml-1">x</span>
        </Badge>
      ))}
    </div>
  );
};

export default ActiveFilterBadge;
