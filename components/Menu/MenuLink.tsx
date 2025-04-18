import Link from "next/link";
import { MenuOptions } from "@/store/menuStore";
import useMenuStore from "@/store/menuStore";

type MenuLinkProps = {
  linkHref: string;
  linkText: string;
  option: MenuOptions;
};

const MenuLink = ({ linkHref, linkText, option }: MenuLinkProps) => {
  const {
    menuOption,
    openMenu,
    isLinkActive,
    activateUnderline,
    deactivateUnderline,
  } = useMenuStore();

  return (
    <div
      className="relative flex items-center justify-center h-16 px-4 cursor-pointer"
      data-option={option}
      onMouseEnter={openMenu}
    >
      <Link
        href={linkHref}
        className="flex items-center justify-center w-full h-full z-10"
      >
        <span
          className="z-20"
          onMouseEnter={activateUnderline}
          onMouseLeave={deactivateUnderline}
        >
          {linkText}
        </span>
      </Link>

      <span
        className={`absolute bottom-3 left-3 right-3 h-0.5 origin-center rounded-full bg-black transition-transform ${isLinkActive && menuOption === option ? "scale-x-100" : "scale-x-0"} duration-300 ease-out`}
      />
    </div>
  );
};

export default MenuLink;
