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
    <nav className=" p-8 flex justify-around items-center ">
      <Link href={"/"}>
        <Logo iconSize="sm" textSize="text-lg font-bold lg:text-2xl" />
      </Link>

      <section>
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
      </section>
    </nav>
  );
}

export default PublicNavbar;
