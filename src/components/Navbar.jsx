import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link to="/" className="flex items-center justify-center pt-4 w-full">
      <h1 className="text-3xl font-bold text-yellow-500 shadow-md  bg-gray-900 hover:translate-x-2 transition duration-500">
        Kubi-CYRPTO
      </h1>
    </Link>
  );
};

export default Navbar;
