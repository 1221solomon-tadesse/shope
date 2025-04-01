"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CategoryData {
  name: string;
  id: string;
  imageUrl: string;
  description: string;
}

const MenuLinks = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Sample category data that would be passed to the next page
  const categories: Record<string, CategoryData> = {
    Menu: {
      id: "cat1",
      name: "Menu",
      imageUrl: "/menu.jpg",
      description: "Browse our full menu",
    },
    Women: {
      id: "cat2",
      name: "Women's Fashion",
      imageUrl: "/women.jpg",
      description: "Latest women's fashion trends",
    },
    Kids: {
      id: "cat3",
      name: "Kids Collection",
      imageUrl: "/kids.jpg",
      description: "Cute outfits for kids",
    },
    Perfume: {
      id: "cat4",
      name: "Perfumes",
      imageUrl: "/perfume.jpg",
      description: "Luxury fragrances",
    },
    Sport: {
      id: "cat5",
      name: "Sportswear",
      imageUrl: "/sport.jpg",
      description: "Performance athletic wear",
    },
    Jewelry: {
      id: "cat6",
      name: "Jewelry",
      imageUrl: "/jewelry.jpg",
      description: "Elegant jewelry pieces",
    },
  };

  const handleClick = (category: string) => {
    setActiveLink(category);

    // Get the data for the selected category
    const categoryData = categories[category];

    // Navigate to the target page with the category data
    router.push(`/category/${categoryData.id}`, {
      // Pass the data as state
      state: {
        categoryData,
      },
    });
  };

  return (
    <div className="md:container md:mx-auto overflow-y-hidden gap-2">
      <div className="flex justify-around scrollbar-hide gap-4 overflow-x-auto py-2">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`text-center px-3 py-3 w-40 md:rounded-3xl border-2 rounded-xl
              ${
                activeLink === category
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-orange-500 hover:text-white"
              } transition-colors duration-200 whitespace-nowrap`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuLinks;
