import React from "react";
import image from "@/components/data/ProfileData";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-bg">
      <div className="grid grid-cols-3 gap-4 mx-auto px-4">
        <div className="flex justify-end items-center ">
          <h1 className="text-white lg:text-128 text-32 font-alfa leading-[175%]">
            Gabeya
          </h1>
        </div>

        <div className="flex justify-center items-center w-auto">
          <Image src={image.imag1} alt="soll" className="" />
        </div>

        <div className="flex flex-col justify-between text-white pt-20 w-full h-full">
          {/* Hidden on small screens, visible on large screens */}
          <h1 className="hidden lg:block leading-[3rem] lg:text-[20px] text-start w-2/3">
            Discover a world of convenience with our user-friendly platform,
            curated collections, and exceptional customer service
          </h1>

          <h1 className="text-white lg:text-[100px] text-[32px] font-alfa leading-[175%] mt-auto">
            Shope
          </h1>
        </div>

        {/* Floating Right Image (Hidden on small screens) */}
        <div className="hidden lg:flex justify-center items-center row-span-3 align-top mb-24 w-auto">
          <Image src={image.imag2} alt="shoe" 
          width={200}/>
        </div>

        {/* Button Section */}
        <div className=" lg:flex justify-center pt-24 hidden">
          <button className="bg-orange-400 w-full p-6 rounded-lg">
            Explore now
          </button>
        </div>

        {/* Second Floating Right Image */}
        <div className="hidden lg:flex justify-center items-center row-span-3">
          <Image src={image.imag2} alt="shoe" />
        </div>
      </div>
      <h1 className=" lg:hidden leading-[3rem] lg:text-[20px]  text-center">
        Discover a world of convenience with our user-friendly platform, curated
        collections, and exceptional customer service
      </h1>
      {/* Button Section */}
      <div className=" flex justify-center pt-24 items-center">
        <button className="bg-orange-400 w-full p-6 rounded-lg lg:hidden">
          Explore now
        </button>
      </div>
    </main>
  );
};

export default Home;
