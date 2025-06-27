"use client";
import React, { useContext } from "react";
import Logo from "./Logo";
import { User } from "@/components/index";
import Link from "next/link";
import { navlinks } from "@/assets/data";
import AppContext from "@/context/AppContext";

function PublicNavbar() {
  const { isLoggedIn } = useContext(AppContext)!;
  return (
    <nav className="h-16 p-4 flex justify-around items-center shadow-md">
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
        {isLoggedIn ? (
          <div className="flex items-center gap-4 font-semibold">
            <Link href={"/login"}>
              <button className="bg-black text-white rounded px-4 py-1 cursor-pointer hover:scale-x-105">
                Login
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="border-2 rounded px-4 py-1 cursor-pointer hover:scale-x-105">
                Sign up
              </button>
            </Link>
          </div>
        ) : (
          <User />
        )}
      </section>
    </nav>
  );
}

export default PublicNavbar;
