import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <header className="flex items-center justify-between">
        <Link href="/" className="text-primary font-semibold text-2xl">
          Bite Zen
        </Link>

        <nav className="flex items-center gap-8 text-gray-100 font-semibold">
          <Link href="/" className="active:text-primary">
            Home
          </Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <Link href="" className="bg-primary px-6 py-2 rounded-lg text-white">
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
