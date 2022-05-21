import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-2xl tracking-tight">
            Github Locate
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/users"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Search Github Users
            </Link>
            <Link
              to="/repos"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Search Github Repositories
            </Link>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default index;
