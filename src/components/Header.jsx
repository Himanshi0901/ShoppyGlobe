import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <header className="bg-black text-white p-4 flex justify-between sticky top-0 w-full z-10 shadow-md">
    <h1 className="text-2xl font-bold">
      <Link to="/" className="text-sky-300 transition">
        ShoppyGlobe
      </Link>
    </h1>

 
    <nav className="flex-grow text-center">
      <Link to="/" className="hover:text-sky-300  transition text-xl font-bold">
        Home
      </Link>
    </nav>


    <Link to="/cart" className="relative hover:text-sky-300 text-xl font-bold transition">
      Cart
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
          {cartCount}
        </span>
      )}
    </Link>
  </header>

  );
};

export default Header;
