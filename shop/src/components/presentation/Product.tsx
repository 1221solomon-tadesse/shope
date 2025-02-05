'use client'
import Image from "next/image";
import Link from "next/link";
import products from "@/components/data/Productcard";
import { useState } from "react";

export default function Product() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Latest Collections</h1>

      <div className="md:container md:mx-auto overflow-y-hidden">
        <div className="flex md:flex-row md:flex-wrap gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex-none w-[80%] md:w-[calc(33.33%-16px)] bg-white rounded-lg shadow-md p-6 
                         hover:shadow-lg transition-shadow duration-300"
            >
              {/* Heart Icon */}
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

              {/* In Stock Badge */}
              <div className="absolute top-10 right-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                In Stock
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover mr-5"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
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
