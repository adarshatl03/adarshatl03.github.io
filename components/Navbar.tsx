"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="border-b border-slate-800">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-lg font-semibold">
          AD
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
