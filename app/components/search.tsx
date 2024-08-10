"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query) return;
    router.push(`/main/search?query=${query}`);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="peer block w-full rounded-md border border-gray-200 py-[5px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
        <MagnifyingGlassIcon
          onClick={handleSearch}
          className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        />
      </div>
    </>
  );
}
