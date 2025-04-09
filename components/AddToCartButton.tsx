"use client";

import { Product } from "@/sanity.types";
import useCartStore from "@/store/store";
import { Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

type AddToCartButtonTypes = {
  product: Product;
  disabled?: boolean;
};

const AddToCartButton = ({ product, disabled }: AddToCartButtonTypes) => {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : itemCount === 1 ? "bg-red-400 hover:bg-red-500 cursor-pointer" : "bg-gray-200 hover:bg-gray-300 cursor-pointer"}`}
        disabled={itemCount === 0 || disabled}
        onClick={() => removeItem(product._id)}
      >
        <span
          className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : itemCount === 1 ? "text-white font-bold" : "text-gray-600"}`}
        >
          {itemCount === 1 ? <Trash2Icon className="w-5 h-5" /> : "-"}
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"}`}
        onClick={() => addItem(product)}
      >
        <span className="text-xl font-bold text-white">+</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
