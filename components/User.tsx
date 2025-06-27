"use client";
import React from "react";

function User() {
  return (
    <div className="border group relative size-8 rounded-full bg-black grid place-items-center cursor-pointer">
      <p className="text-white text-lg">B</p>
      <ul className="absolute hidden group-hover:block shadow-lg rounded p- w-24 top-8 bg-white">
        <li className="hover:bg-gray-100 py-1 px-2">Profile</li>
        <li className="hover:bg-gray-100 py-1 px-2">Verify</li>
        <li
          onClick={() => {
            localStorage.removeItem("token");
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000);
          }}
          className="text-red-800 hover:bg-red-100 font-semibold py-1 px-2"
        >
          Log out
        </li>
      </ul>
    </div>
  );
}

export default User;
