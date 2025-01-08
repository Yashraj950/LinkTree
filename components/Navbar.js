"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar =["/", "/generate"].includes(pathname);
  return (
   <>{showNavbar &&
    <nav className="bg-white w-[80vw] flex justify-between absolute top-10 right-[10vw] rounded-full ">
      <div className="logo flex gap-20 items-center">
      <Link href="/"> <img
          className=" h-[10vh] px-4 rounded-full size-40 "
          src="https://i.pinimg.com/474x/d1/24/c4/d124c4e82f9cf80c7375b35d176bddc2.jpg"
          alt=""
        /></Link> 
        <ul className="flex gap-10 ">

          <Link href="/">
            <li className=" hover:cursor-pointer  hover:bg-slate-100 hover:rounded-lg px-3 py-2">
              Template
            </li>
          </Link>

          <Link href="/">
            <li className=" hover:cursor-pointer  hover:bg-slate-100 hover:rounded-lg px-3 py-2">
              Marketplace
            </li>
          </Link>

          <Link href="/">
            <li
              className=" hover:cursor-pointer  hover:bg-slate-100 hover:rounded-lg p-3 "
             >
              Discover
            </li>
          </Link>

          <Link href="/">
            <li className=" hover:cursor-pointer  hover:bg-slate-100 hover:rounded-lg px-3 py-2">
              Pricing
            </li>
          </Link>

          <Link href="/">
            <li className=" hover:cursor-pointer  hover:bg-slate-100 hover:rounded-lg px-3 py-2">
              Learn
            </li>
          </Link>

        </ul>
      </div>

      <div className="flex gap-1 items-center font-bold">
        <button className="login bg-gray-100 hover:bg-gray-200 p-3 cursor-pointer rounded-xl">
          Log in
        </button>
        <button className="signup text-white bg-gray-900 hover:bg-gray-800  p-3  cursor-pointer rounded-full mx-2">
          Signup free
        </button>
      </div>
    </nav>}</> 
  );
};

export default Navbar;
