import React from 'react'
import Link from 'next/link';
export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-blue-400 px-8 py-3">
        <div className="text-left font-bold">
          <span className="text-white">Profile</span><span className="text-black">Sphere</span>

        </div>
        <Link className=" bg-white text-black p-2 rounded-lg" href={"/addTopic"}>Add Skills</Link>
      </nav>

    </div>
  )
}
