import React from "react";
import { Footer, PrivateNavbar, PublicNavbar } from "../../components/index";
import { Metadata } from "next";

function MainLayout({ children }: { children: React.ReactNode }) {


  return (
    <div>
      <PublicNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
