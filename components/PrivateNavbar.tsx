"use client";
import React, { useContext } from "react";
import Logo from "./Logo";
import { User } from "@/components/index";
import Link from "next/link";
import { navlinks } from "@/assets/data";
import AppContext from "@/context/AppContext";

function PrivateNavbar() {
  const { isLoggedIn } = useContext(AppContext)!;
  return (
    <nav className="h-16 p-4 px-28 flex justify-between items-center shadow-md">
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
      <section>
        <User />
      </section>
    </nav>
  );
}

export default PrivateNavbar;
