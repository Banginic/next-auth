'use client'
import Link from "next/link";
function HomeCTA() {
  return (
    <div className="flex item-center gap-4 mt-4 justify-center">
      <button className="bg-black text-white rounded py-2 px-4 cursor-pointer hover:scale-105">
        Get started
      </button>
      <button className="border-2 rounded py-2 px-4 cursor-pointer hover:scale-105">
        Tutorial
      </button>
    </div>
  );
}

export default HomeCTA;
