import React from "react";
import siteLogo from "../assets/logo-color.png";
import { LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { useAuth } from "../context/AuthProvider";
import FilterModal from "./filterModal";

const Header = () => {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  function userLogout() {
    setAuthUser(null);
    localStorage.removeItem("User");
    window.location.reload();
  }
  function openProfile() {}
  return (
    <div className="navbar p-0 shadow-xl bg-white/30 backdrop-blur-md border-b border-white/10">
      {/* Mobile Menu */}
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Logo */}
      <Link to="/" className="flex-1 ml-2">
        <img
          src={siteLogo}
          className="w-12 h-12 lg:w-16 lg:h-16"
          alt="Site Logo"
        />
      </Link>

      {/* Search and Nav Items */}
      <div className="hidden lg:flex lg:justify-end">
        {/* Search box */}
        <div className="mr-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full lg:w-[300px] xl:w-[400px] border border-green-400 bg-white/20 backdrop-blur-sm text-black placeholder-gray-500"
          />
        </div>
        <Link to="/about" className="px-2 hidden lg:inline-block hover:underline decoration-green-400">
          About Us
        </Link>
        <Link to="/contact" className="px-2 hidden lg:inline-block hover:underline decoration-green-400">
          Contact Us
        </Link>
      </div>

      {/* Login Button */}
      {!authUser ? (
        <button
          onClick={() => document.getElementById("googleModal").showModal()}
          className="btn bg-green-600 hover:bg-green-700 text-white text-sm md:text-base"
        >
          Login
          <LogIn className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </button>
      ) : (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {authUser}
            <LogOut className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() =>
                  document.getElementById("confirmModal").showModal()
                }
              >
                Logout
              </button>
            </li>
            <li>
              <button onClick={openProfile}>Profile</button>
            </li>
          </ul>
        </div>
      )}
      <GoogleAuth />
      <FilterModal
        handleConfirm={userLogout}
        header={"Logout"}
        message={"You are about to logout"}
      />
    </div>
  );
};

export default Header;
