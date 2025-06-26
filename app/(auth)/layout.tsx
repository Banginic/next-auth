import React from "react";
import { Footer, PublicNavbar } from "../../components/index";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-500">
      {/* <PublicNavbar /> */}
      {children}
    </div>
  );
}

export default AuthLayout;
