import { useRouter } from "next/navigation";

type MenuItemProps = {
  menuCategory: Record<
    string,
    {
      name: string;
      slug: string;
      items: { name: string; slug: string }[];
    }
  >;
};

const MenuItem = ({ menuCategory }: MenuItemProps) => {
  const getItemKeys = <T extends Record<string, unknown>>(
    category: T
  ): Array<keyof T> => Object.keys(category) as Array<keyof T>;

  const categoryKeys = getItemKeys(menuCategory);

  const router = useRouter();

  return (
    <div className="flex flex-row items-start justify-between">
      {categoryKeys.map((itemKey) => {
        const category = menuCategory[itemKey];

        return (
          <div
            className={`grid grid-cols-1 gap-1 mx-4 ${category.name.length > 24 ? "w-54" : "w-48"}`}
            key={itemKey}
          >
            <h1
              className="font-bold text-gray-800 mb-2 cursor-pointer"
              onClick={() => router.push(`/categories/${category.slug}`)}
            >
              {category.name}
            </h1>
            {category.items.map((item, index) => (
              <span
                onClick={() => router.push(`/categories/${item.slug}`)}
                className="font-semibold text-sm text-gray-600 hover:text-black cursor-pointer my-0.5"
                key={index}
              >
                {item.name}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
