import MenuLink from "./MenuLink";
import useMenuStore from "@/store/menuStore";
import { MenuOptions } from "@/store/menuStore";

const MenuContainer = () => {
  const { closeMenu } = useMenuStore();

  return (
    <div
      className="xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 hidden lg:flex items-center justify-between px-6 mx-4 max-w-screen-md gap-0 text-lg font-semibold"
      onMouseLeave={closeMenu}
    >
      <MenuLink
        linkHref="/newFeatured"
        linkText="New and Featured"
        option={MenuOptions.newFeatured}
      />

      <MenuLink linkHref="/men" linkText="Men" option={MenuOptions.men} />

      <MenuLink linkHref="/women" linkText="Women" option={MenuOptions.women} />

      <MenuLink linkHref="/kids" linkText="Kids" option={MenuOptions.kids} />
    </div>
  );
};

export default MenuContainer;
