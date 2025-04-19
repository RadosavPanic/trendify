import Link from "next/link";

type MenuItemProps = {
  menuCategory: Record<string, unknown>;
};

const MenuItem = ({ menuCategory }: MenuItemProps) => {
  const getItemKeys = <T extends Record<string, unknown>>(
    category: T
  ): Array<keyof T> => Object.keys(category) as Array<keyof T>;

  const categoryKeys = getItemKeys(menuCategory);

  return (
    <div className="flex flex-row items-start justify-between">
      {categoryKeys.map((itemKey) => (
        <div
          className={`grid grid-cols-1 gap-1 mx-4 ${itemKey.length > 24 ? "w-54" : "w-48"}`}
          key={itemKey}
        >
          <h1 className="font-bold text-gray-800 mb-2">{itemKey}</h1>
          {(menuCategory[itemKey] as string[]).map((name, index) => (
            <Link
              href="#"
              className="font-semibold text-sm text-gray-600 cursor-pointer my-0.5"
              key={index}
            >
              {name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
