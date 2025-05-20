"use client";

import { useState } from "react";

import Menu from "./Menu";
import SearchMenu from "./SearchMenu";

type MenuWrapperProps = {
  children: React.ReactNode;
};

const MenuWrapper = ({ children }: MenuWrapperProps) => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  const handleToggleSearchMenu = () => {
    setIsSearchMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isSearchMenuOpen && (
        <SearchMenu
          isSearchMenuOpen={isSearchMenuOpen}
          handleToggleSearchMenu={handleToggleSearchMenu}
        />
      )}

      <div className="sticky top-0 z-50">
        <Menu handleToggleSearchMenu={handleToggleSearchMenu} />
        {children}
      </div>
    </>
  );
};

export default MenuWrapper;
