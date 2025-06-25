"use client";
import AllProduct from "@/components/presentation/AllProduct";
import Home from "@/components/presentation/Home";
import MenuLinks from "@/components/presentation/menu";
import Product from "@/components/presentation/Product";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <div>
      <Home />
      <Product initialCategory={category} />
      <MenuLinks />
      <AllProduct />
    </div>
  );
}
