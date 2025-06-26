import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navlinks } from "@/assets/data";

function PublicNavbar() {
  return (
    <nav className="h-14 p-4 flex justify-around items-center shadow-2xl">
      <Link href={"/"}>
        <Logo iconSize="sm" textSize="text-lg font-bold lg:text-2xl" />
      </Link>
      <ul className="flex items-center text-lg font-semibold gap-2">
        {navlinks.map((link) => (
          <li key={link.lable}>
            <Link href={link.link}>{link.lable}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PublicNavbar;
