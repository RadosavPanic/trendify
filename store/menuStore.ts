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
  openMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
  closeMenu: () => void;
  activateUnderline: () => void;
  deactivateUnderline: () => void;
};

const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      isMenuOpen: false,
      isLinkActive: false,
      menuOption: MenuOptions.default,
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
    }),
    {
      name: "menu-storage",
    }
  )
);

export default useMenuStore;
