import React from "react";
import Image from "next/image";

function Logo({ textSize, iconSize }: { textSize: string; iconSize: string }) {
  return (
    <div className="flex gap-2 items-center">
      {" "}
      <Image src={""} alt="logo" className={iconSize} />
      <p aria-label="logo text" className={`${textSize}`}>
        Next-Auth
      </p>
    </div>
  );
}

export default Logo;
