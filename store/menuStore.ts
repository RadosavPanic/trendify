import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum MenuOptions {
  default = "",
  "New And Featured" = "New And Featured",
  Men = "Men",
  Women = "Women",
  Kids = "Kids",
}

type MenuState = {
  isMenuOpen: boolean;
  isLinkActive: boolean;
  menuOption: MenuOptions;
  recentSearches: string[];
  searchQuery: string;
  openMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
  closeMenu: () => void;
  activateUnderline: () => void;
  deactivateUnderline: () => void;
  setSearchQuery: (query: string) => void;
  addQueryToRecentSearches: (query: string) => void;
  removeQueryFromRecentSearches: (query: string) => void;
};

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      isMenuOpen: false,
      isLinkActive: false,
      menuOption: MenuOptions.default,
      recentSearches: [],
      searchQuery: "",
      openMenu: (event: React.MouseEvent<HTMLDivElement>) => {
        const option = event.currentTarget.dataset.option as MenuOptions;
        set({
          menuOption: option,
          isMenuOpen: true,
        });
      },
      closeMenu: () =>
        set({
          menuOption: MenuOptions.default,
          isMenuOpen: false,
        }),
      activateUnderline: () => {
        set({
          isLinkActive: true,
        });
      },
      deactivateUnderline: () => {
        set({
          isLinkActive: false,
        });
      },
      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },
      addQueryToRecentSearches: (query: string) => {
        const { recentSearches } = get();

        const existingIndex = recentSearches.indexOf(query);

        const updatedSearches =
          existingIndex !== -1
            ? [...recentSearches.filter((item) => item !== query), query]
            : [...recentSearches, query];

        if (updatedSearches.length > 5) updatedSearches.shift();

        set({ recentSearches: updatedSearches });
      },
      removeQueryFromRecentSearches: (query: string) => {
        const { recentSearches } = get();
        const updatedSearches = recentSearches.filter((item) => item !== query);
        set({ recentSearches: updatedSearches });
      },
    }),
    {
      name: "menu-storage",
    }
  )
);

export default useMenuStore;
