import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '../data/ProfileData'

const Footer = () => {
  return (
    <main className="bg-[#882BEC] ">
      <div className="flex justify-around ">
        <div>
          <div>
            <Image src={data.logo} alt="soll" className="flex "></Image>
          </div>
          <div>
            <Link href=",/">Facebook</Link>
            <Link href=",/">Facebook</Link>
            <Link href=",/">Facebook</Link>
          </div>
        </div>
        <div className="flex justify-between gap-20 mt-10 text-white">
          <div>
            <h1 className="font-bold">About</h1>
            <p>About us</p>
            <p>New blogs</p>
            <p>Location</p>
          </div>
          <div>
            <h1 className="font-bold">Product</h1>
            <p>Pricing</p>
            <p>Store</p>
            <p>Features</p>
          </div>
          <div>
            <h1 className="font-bold">Discover</h1>
            <p>Contact us</p>
            <p>Customer</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer
