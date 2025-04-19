import useMenuStore, { MenuOptions } from "@/store/menuStore";
import MenuItem from "./MenuItem";

const MenuView = () => {
  const { isMenuOpen, menuOption, closeMenu } = useMenuStore();

  const menuItems = {
    newFeatured: {
      Featured: ["Shop All New Arrivals", "Best Sellers", "Last in Stock"],
      "Shop Icons": [
        "Nike Sportswear",
        "Adidas RunFalcon",
        "Nike Air Max",
        "Under Armour",
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
      Featured: ["New Arrivals", "Best Sellers", "Last in Stock"],
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
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Hats",
        "Headwear",
        "Socks",
      ],
    },
    women: {
      Featured: ["New Arrivals", "Best Sellers", "Last in Stock"],
      Shoes: [
        "All Shoes",
        "Lifestyle",
        "Jordan",
        "Running",
        "Training and Gym",
        "Slippers",
      ],
      Clothing: [
        "All Clothing",
        "Hoodies and Sweatshirts",
        "Jackets",
        "Trousers",
        "Leggings",
        "Tops and T-Shirts",
        "Shorts",
        "Sports Bras",
      ],
      "Accessories and Equipment": [
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Hats",
        "Headwear",
        "Socks",
      ],
    },
    kids: {
      Featured: ["New Arrivals", "Best Sellers", "Last in Stock"],
      Shoes: [
        "All Shoes",
        "Lifestyle",
        "Jordan",
        "Football",
        "Running",
        "Basketball",
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
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Socks",
      ],
    },
  };

  return (
    <div
      className={`${isMenuOpen ? "absolute top-[66px] left-0 flex" : "hidden"} w-full bg-white shadow-lg z-50`}
      onMouseLeave={closeMenu}
    >
      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

      <div className="flex flex-col items-center justify-start w-full h-[33vh] py-8">
        {menuOption === MenuOptions.newFeatured && (
          <MenuItem menuCategory={menuItems.newFeatured} />
        )}

        {menuOption === MenuOptions.men && (
          <MenuItem menuCategory={menuItems.men} />
        )}

        {menuOption === MenuOptions.women && (
          <MenuItem menuCategory={menuItems.women} />
        )}

        {menuOption === MenuOptions.kids && (
          <MenuItem menuCategory={menuItems.kids} />
        )}
      </div>
    </div>
  );
};

export default MenuView;
