import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar bg-zinc-900 px-8 text-neutral-100 shadow-lg lg:px-0">
      <header className="container mx-auto flex flex-col sm:flex-row justify-between items-center min-h-16 max-w-5xl">
        <div className="logo container w-28 py-2">
          <img src={logo} alt="" className="" />
        </div>
        <div className="links flex flex-wrap gap-8 font-bold my-4 sm:my-0">
          <Link
            className="hover:text-neutral-300 transition text-center"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-neutral-300 transition text-center"
            to="/finished"
          >
            Finished Tasks
          </Link>
          <Link
            className="hover:text-neutral-300 transition text-center"
            to="/about"
          >
            About
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
