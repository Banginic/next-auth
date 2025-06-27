'use client'
import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { PrivateNavbar, PublicNavbar } from "./index";

function Header() {
  const appContext = useContext(AppContext);
  return (
    <header>
      {appContext?.isLoggedIn ? <PrivateNavbar /> : <PublicNavbar />}
    </header>
  );
}

export default Header;
