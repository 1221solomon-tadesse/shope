"use client"; 
import { HiMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

const Navbar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [isMore, setIsMore] = useState(false);
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex justify-between md:justify-around p-4 items-center relative">
      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        <button onClick={() => setIsSidebarOpen(true)}>
          <HiMenu className="w-6 h-6" />
        </button>
        <h1>Logo</h1>
      </div>
      <div className="hidden md:block">
        <h1>Logo</h1>
      </div>
      <ul className=" hidden md:flex gap-20  ">
        <div className="relative text-center">
          <button onClick={() => setIsOpen(!isOpen)} className="flex gap-5">
            Register/Login
            <RiArrowDropDownLine />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
              <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
                Register
              </a>
              <hr />
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </a>
            </div>
          )}
        </div>
        <Link href="/" className="cursor-pointer">
          Home
        </Link>
        <Link href="/?category=Men" className="cursor-pointer">
          Men
        </Link>
        <Link href="/?category=Women" className="cursor-pointer">
          Women
        </Link>
        <Link href="/?category=Kids" className="cursor-pointer">
          Kids
        </Link>
        <Link href="/Accessories" className="cursor-pointer">
          Accessories
        </Link>
        <div className="relative">
          <button onClick={() => setIsMore(!isMore)} className="flex gap-5">
            More
            <RiArrowDropDownLine />
          </button>
          {isMore && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg ">
              <a
                href="/ Perfumes"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Perfumes
              </a>
              <hr />
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Jaweleries
              </a>
              <hr />
              <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
                Jym wears
              </a>
              <hr />
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Ventage wears
              </a>
              <hr />
              <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
                Sport wear
              </a>
              <hr />
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Payjams
              </a>
              <hr />
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Slipers
              </a>
            </div>
          )}
        </div>
      </ul>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Search"
          className="border-2  h-12 p-2 rounded-l-3xl focus:outline-none"
        />
        <div className="bg-[#882BEC] flex items-center justify-center w-12 h-12 rounded-r-3xl">
          <CiSearch className="text-white w-6 h-6" />
        </div>
      </div>
      <div className="hidden  md:block">Currency</div>
      <div className="w-12 flex items-center justify-center">
        <button
          className="rounded-full bg-[#882BEC] w-10 h-10 flex items-center justify-center relative"
          onClick={() => router.push("/Cart")}
        >
          <FaShoppingBag className="text-white w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 h-fit w-1/2 bg-white z-50 p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <hr />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center"
              >
                Register/Login <RiArrowDropDownLine />
              </button>
              <hr />
              {isOpen && (
                <div className="pl-4">
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    <a
                      href="/register"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Register
                    </a>

                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </a>
                  </div>
                </div>
              )}
              <ul>
                <li className="cursor-pointer">Our catagories</li>
                <li className="cursor-pointer ">Men</li>
                <li className="cursor-pointer ">women</li>
                <li className="cursor-pointer ">Kids</li>
                <li className="cursor-pointer ">Accessories</li>
              </ul>
              <button
                onClick={() => setIsMore(!isMore)}
                className="flex justify-between items-center"
              >
                More <RiArrowDropDownLine />
              </button>
              {isMore && (
                <div className="pl-4">
                  {" "}
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg ">
                    <a
                      href="/ Perfumes"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Perfumes
                    </a>
                    <hr />
                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Jaweleries
                    </a>
                    <hr />
                    <a
                      href="/register"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Jym wears
                    </a>
                    <hr />
                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Ventage wears
                    </a>
                    <hr />
                    <a
                      href="/register"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sport wear
                    </a>
                    <hr />
                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Payjams
                    </a>
                    <hr />
                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Slipers
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
