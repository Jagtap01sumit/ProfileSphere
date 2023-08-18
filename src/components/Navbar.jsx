import React from "react";
import Link from 'next/link';
export default function Navbar() {
    return (
        <div className="flex items-center justify-center bg-gray-200 list-none">
            <div className="bg-blue-500 rounded-2xl w-3/4  h-12 flex items-center justify-center font-bold ">
                <li className=" pr-10  hover:text-white">
                    <Link href="/">Home</Link></li>
                <li className=" pr-10  hover:text-white">
                    <Link href="/login">Login</Link>
                </li>
                <li className=" pr-103  hover:text-white">
                    <Link href="/signup">Registration</Link>
                </li>
            </div>
        </div>
    )
}