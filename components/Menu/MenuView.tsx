import Link from "next/link";
import useMenuStore, { MenuOptions } from "@/store/menuStore";

const MenuView = () => {
  const { isMenuOpen, menuOption, closeMenu } = useMenuStore();

  const menuItems = {
    newFeatured: {
      Shoes: [
        "Nike",
        "Adidas",
        "Reebok",
        "Asics",
        "New Balance",
        "Puma",
        "Training and Gym",
        "Slippers",
      ],
      "Shop Icons": [
        "Nike Sportswear",
        "Adidas RunFalcon",
        "Under Armour",
        "Headwear",
        "Socks",
      ],
      Jordan: [
        "Shop All Jordan",
        "Jordan Streetwear",
        "Jordan Basketball",
        "Jordan x PSG",
      ],
      "Discover Sport": [
        "Football",
        "Running",
        "Basketball",
        "Tennis",
        "Training and Gym",
      ],
    },
    men: {
      Shoes: [
        "All Shoes",
        "Running",
        "Jordan",
        "Nike Air",
        "Football",
        "Training and Gym",
        "Slippers",
      ],
      Clothing: [
        "All Clothing",
        "Hoodies and Sweatshirts",
        "Jackets",
        "Trousers",
        "Tops and T-Shirts",
        "Shorts",
      ],
      "Accessories and Equipment": [
        "Hats",
        "Backpacks",
        "Bags",
        "Headwear",
        "Socks",
      ],
    },
    women: {
      Shoes: [
        "All Shoes",
        "Running",
        "Jordan",
        "Nike Air",
        "Football",
        "Training and Gym",
        "Slippers",
      ],
      Clothing: [
        "All Clothing",
        "Hoodies and Sweatshirts",
        "Jackets",
        "Trousers",
        "Tops and T-Shirts",
        "Shorts",
      ],
      "Accessories and Equipment": [
        "Hats",
        "Backpacks",
        "Bags",
        "Headwear",
        "Socks",
      ],
    },
    kids: {
      Shoes: [
        "All Shoes",
        "Running",
        "Jordan",
        "Nike Air",
        "Football",
        "Training and Gym",
        "Slippers",
      ],
      Clothing: [
        "All Clothing",
        "Hoodies and Sweatshirts",
        "Jackets",
        "Trousers",
        "Tops and T-Shirts",
        "Shorts",
      ],
      "Accessories and Equipment": [
        "Hats",
        "Backpacks",
        "Bags",
        "Headwear",
        "Socks",
      ],
    },
  };

  const getItemKeys = <T extends Record<string, unknown>>(
    category: T
  ): Array<keyof T> => Object.keys(category) as Array<keyof T>;

  return (
    <div
      className={`${isMenuOpen ? "absolute top-[66px] left-0 flex" : "hidden"} w-full bg-white shadow-lg z-50`}
      onMouseLeave={closeMenu}
    >
      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

      <div className="flex flex-col items-center justify-evenly gap-3 w-full h-[33vh] py-4 text-gray-800">
        {menuOption === MenuOptions.newFeatured && (
          <div className="flex flex-row items-center justify-between">
            {getItemKeys(menuItems.newFeatured).map((itemKey) => (
              <div className="flex flex-col items-start px-4" key={itemKey}>
                <h1 className="font-bold mb-2">{itemKey}</h1>
                {menuItems.newFeatured[itemKey].map((name, index) => (
                  <Link href="#" className="cursor-pointer" key={index}>
                    {name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        {menuOption === MenuOptions.men && (
          <div className="flex flex-row items-center justify-between">
            {getItemKeys(menuItems.men).map((itemKey) => (
              <div className="flex flex-col items-start px-4" key={itemKey}>
                <h1 className="font-bold mb-2">{itemKey}</h1>
                {menuItems.men[itemKey].map((name, index) => (
                  <Link href="#" className="cursor-pointer" key={index}>
                    {name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        {menuOption === MenuOptions.women && (
          <div className="flex flex-row items-center justify-between">
            {getItemKeys(menuItems.women).map((itemKey) => (
              <div className="flex flex-col items-start px-4" key={itemKey}>
                <h1 className="font-bold mb-2">{itemKey}</h1>
                {menuItems.women[itemKey].map((name, index) => (
                  <Link href="#" className="cursor-pointer" key={index}>
                    {name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        {menuOption === MenuOptions.kids && (
          <div className="flex flex-row items-center justify-between">
            {getItemKeys(menuItems.kids).map((itemKey) => (
              <div className="flex flex-col items-start px-4" key={itemKey}>
                <h1 className="font-bold mb-2">{itemKey}</h1>
                {menuItems.kids[itemKey].map((name, index) => (
                  <Link href="#" className="cursor-pointer" key={index}>
                    {name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuView;
