import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex navbar bg-base-100 border-2 mt-1 rounded-full shadow-xl mb-5
    ">
    <div className="flex navbar-start">
      <div className="flex dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="flex menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link href={"/coffee"}>コーヒ豆の説明</Link></li>
          <li><Link href={"/createTunber"}>タンブラー作り</Link></li>
          <li><Link href={"/"}>バリスタ体験</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">kidsバリスタ体験会</a>
    </div>
    <div className="navbar-center lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href={"/coffee"}>コーヒ豆の説明</Link></li>
          <li><Link href={"/createTunber"}>タンブラー作り</Link></li>
          <li><Link href={"/experience"}>バリスタ体験</Link></li>
          </ul>
    </div>
  </div>
  )
}

export default Navbar
