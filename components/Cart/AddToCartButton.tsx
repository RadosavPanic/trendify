"use client";

import { Product } from "@/sanity.types";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { IoMdCart } from "react-icons/io";

type AddToCartButtonProps = {
  product: Product;
  disabled?: boolean;
};

const AddToCartButton = ({ product, disabled }: AddToCartButtonProps) => {
  const { addItem, getItemCount } = useCartStore();
  const router = useRouter();
  const itemCount = getItemCount(product._id);

  const handleClick = () => {
    if (disabled) return;

    if (itemCount > 0) router.push("/cart");
    else addItem(product);
  };

  return (
    <button
      className={`
        bg-black text-white font-semibold py-2 px-4
        transition-colors duration-200
        w-full sm:max-w-md
        block sm:inline-block rounded
        mt-2 cursor-pointer ${disabled && "cursor-not-allowed opacity-50"}
        text-center z-40 flex items-center justify-center
      `}
      style={{ alignSelf: "flex-start" }}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center gap-2">
        {disabled ? (
          "Out of Stock"
        ) : itemCount > 0 ? (
          <>
            <span>Go to Cart</span>
            <IoMdCart className="size-5" />
          </>
        ) : (
          "Add to Cart"
        )}
      </span>
    </button>
  );
};

export default AddToCartButton;
