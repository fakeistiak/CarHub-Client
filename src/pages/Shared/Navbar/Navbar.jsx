import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user?.displayName);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/brands">Brands</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/addCar">Add Car</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/updateCar">Update Car</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/feedback">Feedback</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/addToCart">Cart</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/carts">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white border-y-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="normal-case text-xl font-bold">
          {/* <span className="text-pink-500">IAB CARS</span> */}
          <img
            className="w-28 h-20"
            src="https://i.ibb.co/fXC0KkR/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0}>
          <div className="flex flex-col items-center p-2 ">
            {user && (
              <img
                className="w-10 h-10 avatar rounded-full object-cover"
                src={user?.photoURL}
                alt="User_avatar"
              />
            )}
            <h1 className="text-lg text-black">{user && user?.displayName}</h1>
          </div>
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 hover:bg-red-700 text-lg px-7 md:px-8 lg:px-6 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
