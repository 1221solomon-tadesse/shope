"use client"
import { useState } from "react";
import Link from "next/link";

const MenuLinks = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (link:string) => {
    setActiveLink(link);
  };

  return (
    <div className="md:container md:mx-auto overflow-y-hidden gap-2">
      <div className="flex justify-around  scrollbar-hide gap-4">
        {["Menu", "Women", "Kids", "Perfume", "Sport", "Jewelry"].map(
          (item) => (
            <Link
              key={item}
              href="./Menu"
              className={`border-2 rounded-3xl p-5 text-center inline-block  
          ${
            activeLink === item ? "bg-orange-500" : "hover:bg-orange-300"
          } transition-colors duration-200`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default MenuLinks;