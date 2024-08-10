"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function AuthLinks() {
  const links = [
    { name: "Sign in", href: "/auth/signin" },
    { name: "Login", href: "/auth/login" },
    // { name: "Logout", href: "/auth/logout" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "px-6 py-[2px] font-semibold text-sm transition-colors duration-300 ease-in-out hover:bg-gray-500 hover:text-white",
            {
              "bg-white text-blue-800": link.name === "Login",
            },
            {
              "bg-blue-600 text-white ": link.name === "Sign in",
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export function NavList() {
  const links = [
    { name: "Home", href: "/main" },
    { name: "Anime", href: "/main/anime" },
    { name: "Manga", href: "/main/manga" },
    { name: "About", href: "/main/about" },
  ];

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "rounded-sm px-2 py-2 text-sm font-medium text-[#a3a3a3] hover:bg-gray-300 hover:text-gray-900",
            {
              "text-white": link.href === pathname,
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
