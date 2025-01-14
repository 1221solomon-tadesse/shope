import React from "react";
import image from "@/components/data/ProfileData";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-3  mx-auto px-4">
        <div className="col-span-1 flex justify-center items-center py-24">
          <h1 className="text-white text-128 font-alfa leading-175 text-center">
            Gabeya
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image src={image.imag1} alt="soll" className="pt-9" />
        </div>

        <div className="flex flex-col justify-between text-white pt-24 w-full h-full">
          <h1 className="leading-3rem text-20 text-center lg:text-left">
            Discover a world of convenience with our user-friendly platform,
            curated collections, and exceptional customer service
          </h1>
          <h1 className="text-white text-128 font-alfa leading-175 text-center lg:text-left mt-auto">
            Shop
          </h1>
        </div>
        <div className="flex justify-center items-center lg:col-span-1 row-span-3 align-top">
          <Image src={image.imag2} alt="shoe" />
        </div>
        <div className="  lg:col-span-1 row-span-3 justify-center pt-24 ">
          <button className="bg-orange-400 w-full h-fit p-6 rounded-lg">Explore now</button>
        </div>
        <div className="flex justify-center items-center lg:col-span-1 row-span-3">
          <Image src={image.imag2} alt="shoe" />
        </div>
      </div>
    </main>
  );
};

export default Home;
