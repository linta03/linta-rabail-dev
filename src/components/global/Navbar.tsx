'use client'
import { navItems } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-lg p-4 text-white">
      <div>
        {navItems.map((item) => (
          <Link href={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
