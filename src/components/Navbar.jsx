import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center pt-4 w-full border-none "
    >
      <h1 className="text-3xl font-bold text-yellow-500   hover:scale-105 transition duration-500 border-none">
        Kubi-CYRPTO
      </h1>
    </Link>
  );
};

export default Navbar;
