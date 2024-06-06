"use client";
import Link from "next/link";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [showNav, setShowNav] = useState(true);
  const path = usePathname();
  useEffect(() => {
    setShowNav(false);
  }, [path]);

  return (
    <>
      <div className="hidden md:block">
        <nav className="-ml-4 text-sm font-medium select-none">
          <NavLinks className="px-4 py-2" />
        </nav>
      </div>
      <div className="relative block md:hidden select-none">
        <HamburgerMenuIcon
          className="absolute cursor-pointer"
          onPointerDown={() => setShowNav((prev) => !prev)}
        />

        <nav
          className={`w-0 overflow-hidden h-screen fixed top-0 left-0 pt-16 flex flex-col text-sm font-medium bg-white z-[100] shadow-xl ${
            showNav ? "!w-2/3 transition-all" : ""
          }`}
        >
          <Cross1Icon
            className="absolute left-8 top-8 cursor-pointer transition-transform"
            onPointerDown={() => setShowNav((prev) => !prev)}
          />

          <NavLinks className="px-8 py-4" />
        </nav>
      </div>
    </>
  );
}

function NavLinks({ className }: { className?: string }) {
  const path = usePathname();

  return (
    <>
      <Link
        className={`text-gray-600 ${className} hover:text-gray-500 ${
          path === "/" ? "!text-yellow-500" : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`text-gray-600 ${className} hover:text-gray-500 ${
          path === "/blog" ? "!text-yellow-500" : ""
        }`}
        href="/blog"
        prefetch
      >
        Blog
      </Link>
      <Link
        className={`text-gray-600 ${className} hover:text-gray-500 ${
          path === "/docs" ? "!text-yellow-500" : ""
        }`}
        href="/docs"
      >
        Document
      </Link>
      <Link
        className={`text-gray-600 ${className} hover:text-gray-500 ${
          path === "/gallery" ? "!text-yellow-500" : ""
        }`}
        href="/gallery"
        prefetch
      >
        Gallery
      </Link>
      <Link
        className={`text-gray-600 ${className} hover:text-gray-500 ${
          path === "/video" ? "!text-yellow-500" : ""
        }`}
        href="/video"
        prefetch
      >
        Video
      </Link>
    </>
  );
}
