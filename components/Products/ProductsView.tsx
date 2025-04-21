import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategoriesSelectorComponent from "../ui/category-selector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div className="flex flex-col sm:gap-4 sm:mx-0 lg:mx-40 mt-10">
      <hr className="my-1 border-gray-300" />
      <div className="w-[200px] flex flex-row gap-10">
        <CategoriesSelectorComponent categories={categories} />
      </div>
      <hr className="my-1 border-gray-300" />

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
