import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar bg-neutral-900 text-neutral-100">
      <header className="container mx-auto flex justify-between items-center h-16 max-w-5xl">
        <div className="logo container w-28 py-2">
          <img src={logo} alt="" className="" />
        </div>
        <div className="links flex gap-8 font-bold">
          <Link className="hover:text-neutral-300 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-neutral-300 transition" to="/finished">
            Finished Tasks
          </Link>
          <Link className="hover:text-neutral-300 transition" to="/about">
            About
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
