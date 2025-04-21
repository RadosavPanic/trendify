import { menuItems } from "@/constants";
import MenuLink from "./MenuLink";
import { MenuOptions } from "@/store/menuStore";

const MenuContainer = () => {
  return (
    <div className="xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 hidden lg:flex items-center justify-between px-6 mx-4 max-w-screen-md gap-0 text-lg font-semibold">
      {Object.entries(menuItems).map(([key, categoryOption]) => {
        const firstCategory = categoryOption[Object.keys(categoryOption)[0]];
        const slug = firstCategory.slug;

        return (
          <MenuLink
            key={key}
            path={slug}
            text={key}
            option={MenuOptions[key as keyof typeof MenuOptions]}
          />
        );
      })}
    </div>
  );
};

export default MenuContainer;
