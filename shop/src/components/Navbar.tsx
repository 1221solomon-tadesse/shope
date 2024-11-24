"use client"; 
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="flex justify-around p-4 items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <ul className="flex gap-20  ">
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
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer ">Men</li>
        <li className="cursor-pointer ">women</li>
        <li className="cursor-pointer ">Kids</li>
        <li className="cursor-pointer ">Accessories</li>
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
      <div>Currency</div>
      <div className="w-12 flex items-center justify-center">
        <div className="rounded-full bg-[#882BEC] w-10 h-10 flex items-center justify-center">
          <FaShoppingBag className="text-white  w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
