'use client';

import Image from "next/image";
import products, { menu } from "@/components/data/Productcard";
import { useCart } from '@/contect/CartContect'; 
import { useState, useEffect } from "react";

interface ProductProps {
  initialCategory?: string | null;
}

export default function Product({ initialCategory = null }: ProductProps) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, 
    });
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mt-10 mb-10 flex justify-around">
        Latest Collections
      </h1>

      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        <button
          className={`px-4 py-2 rounded-lg border ${
            selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {menu.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === item.name ? 'bg-blue-600 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setSelectedCategory(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="md:container md:mx-auto">
        <div className="flex md:flex-row md:flex-wrap gap-4 pb-4 justify-center">
          {filteredProducts.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="relative flex-none w-[80%] md:w-[350px] h-auto bg-white rounded-lg border-2 p-6"
            >
              <button className="absolute top-10 left-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <div className="absolute top-10 right-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                In Stock
              </div>

              <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
