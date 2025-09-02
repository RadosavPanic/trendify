"use client";

import { Product } from "@/sanity.types";
import { CiHeart } from "react-icons/ci";

type AddToFavouritesButtonProps = {
  product: Product;
  disabled?: boolean;
};

const AddToFavouritesButton = ({
  product,
  disabled,
}: AddToFavouritesButtonProps) => {
  console.log(product);
  const handleClick = () => {};

  return (
    <button
      className={`
        bg-black text-white font-semibold py-2 px-4
        transition-colors duration-200
        w-full sm:max-w-md
        block sm:inline-block rounded
        mt-2 cursor-pointer ${disabled && "cursor-not-allowed opacity-50"}
        text-center z-40
        flex items-center justify-center
      `}
      style={{ alignSelf: "flex-start" }}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center gap-2">
        Add to Favourites
        <CiHeart className="w-5 h-5" />
      </span>
    </button>
  );
};

export default AddToFavouritesButton;
