"use client";
import { navItems } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./menuToggle";
import WidthWrapper from "../ui/WidthWrapper";

const Navbar = () => {
  return (
      <nav className="dark:bg-white/10  z-[9999] bg-gray-300/60 left-[6px] xl:left-[30%]md:left-[10px] right-[10px] flex fixed items-center top-4  w-[98%] justify-center gap-4 backdrop-blur-lg p-4 md:py-2 py-1 dark:text-white text-black  rounded-full">
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="md:text-base text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
  );
};

export default Navbar;
