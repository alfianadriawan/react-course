import React from "react";
import { Link } from "react-router-dom";
import { isUserAuthenticated, deleteCookie } from "utils/cookie";

function Header() {
  const logoutClicked = () => {
    deleteCookie("userData");
    deleteCookie("token");
    window.location.replace("/login");
  };

  const listNavbar = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Info Corona",
      path: "/infocorona",
    },
  ];

  const authenticatedMenu = () => {
    if (isUserAuthenticated) {
      return (
        <>
          <Link
            to="/product"
            className="hover:text-yellow-400 text-white text-lg px-6 py-3 my-4 sm:my-0 font-medium"
          >
            Product
          </Link>

          <button
            onClick={() => {
              logoutClicked();
            }}
            className="bg-red-700 hover:bg-red-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 my-4 sm:my-0 font-medium ml-6"
          >
            Logout
          </button>
        </>
      );
    }
    return "";
  };

  return (
    <div className="flex justify-between bg-green-600 py-3">
      <div className='container transition-all duration-200 items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible pl-6"'>
        <div className="leading-10">
          {listNavbar.map((name) => {
            return (
              <Link
                to={name.path}
                key={name.path}
                className="hover:text-yellow-400 text-white text-lg px-6 py-3 my-4 sm:my-0 font-medium"
              >
                {name.name}
              </Link>
            );
          })}
        </div>
        {authenticatedMenu()}
      </div>
    </div>
  );
}

export default Header;
