import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            <span className="font-semibold text-2xl tracking-tight">
              Github Locate
            </span>
          </Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
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
