"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import useMenuStore from "@/store/menuStore";

import { SearchIcon } from "@sanity/icons";
import { XIcon } from "lucide-react";

type SearchMenuProps = {
  handleToggleSearchMenu: () => void;
  isSearchMenuOpen: boolean;
};

const SearchMenu = ({
  isSearchMenuOpen,
  handleToggleSearchMenu,
}: SearchMenuProps) => {
  const router = useRouter();

  const {
    recentSearches,
    searchQuery,
    setSearchQuery,
    addQueryToRecentSearches,
    removeQueryFromRecentSearches,
  } = useMenuStore();

  const handleSearchSubmit = (e?: React.FormEvent, query?: string) => {
    if (e) e.preventDefault();

    const searchTerm = query || searchQuery?.trim();
    if (searchTerm) {
      addQueryToRecentSearches(searchTerm);
      setSearchQuery("");
      handleToggleSearchMenu();
      router.push(`/search?query=${searchTerm}`);
    }
  };

  useEffect(() => {
    if (isSearchMenuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isSearchMenuOpen]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/25 bg-opacity-30 z-100"
        onClick={handleToggleSearchMenu}
      />

      <div className="fixed top-0 left-0 w-full h-1/2 bg-white shadow-md flex flex-col z-200">
        <div className="flex justify-between items-center px-4 lg:px-10 py-4">
          <Link href="/" className="hidden lg:inline">
            <Image
              src="/trendify.png"
              alt="trendify-logo"
              width={50}
              height={50}
            />
          </Link>

          <Form
            action="/search"
            className="flex w-[80%] lg:w-1/2  items-center justify-center font-semibold text-lg bg-gray-100 text-black rounded-full border"
            onSubmit={handleSearchSubmit}
          >
            <div className="flex w-full relative group">
              <button
                type="submit"
                className="absolute left-0 top-1/2 peer transform -translate-y-1/2 bg-transparent hover:bg-gray-300 group-hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <SearchIcon className="w-11 h-11" />
              </button>

              <input
                type="text"
                name="query"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-14 hover:bg-gray-200 py-2 bg-transparent group rounded-full focus:outline-none"
              />
            </div>
          </Form>

          <button
            className="text-black font-semibold text-lg ml-4 cursor-pointer"
            onClick={handleToggleSearchMenu}
          >
            Cancel
          </button>
        </div>

        <div className="flex justify-center items-center px-4 lg:px-10 py-4">
          <div className="flex flex-col w-full lg:w-1/2 items-center justify-between gap-4 px-4 py-2 text-gray-600 font-medium">
            <p className="self-start">Recent Searches</p>
            {recentSearches.length > 0 && (
              <>
                {recentSearches.toReversed().map((query, index) => (
                  <div
                    key={index}
                    className="flex flex-row w-full items-start justify-between"
                  >
                    <p
                      className="text-black text-xl cursor-pointer"
                      onClick={() => handleSearchSubmit(undefined, query)}
                    >
                      {query}
                    </p>
                    <XIcon
                      className="w-6 h-6 hover:bg-gray-200 rounded-full cursor-pointer"
                      onClick={() => removeQueryFromRecentSearches(query)}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMenu;
