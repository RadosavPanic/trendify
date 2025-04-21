import useMenuStore, { MenuOptions } from "@/store/menuStore";
import MenuItem from "./MenuItem";
import { menuItems } from "@/constants";

const MenuView = () => {
  const { isMenuOpen, menuOption, closeMenu } = useMenuStore();

  return (
    <div
      className={`${isMenuOpen ? "absolute top-[60px] left-0 flex" : "hidden"} w-full bg-white shadow-lg z-50`}
      onMouseLeave={closeMenu}
    >
      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

      <div className="flex flex-col items-center justify-start w-full h-[33vh] py-8">
        {menuOption === MenuOptions["New And Featured"] && (
          <MenuItem menuCategory={menuItems["New And Featured"]} />
        )}

        {menuOption === MenuOptions.Men && (
          <MenuItem menuCategory={menuItems.Men} />
        )}

        {menuOption === MenuOptions.Women && (
          <MenuItem menuCategory={menuItems.Women} />
        )}

        {menuOption === MenuOptions.Kids && (
          <MenuItem menuCategory={menuItems.Kids} />
        )}
      </div>
    </div>
  );
};

export default MenuView;
