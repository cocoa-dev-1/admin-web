import styles from "../styles/components/NavBar.module.css";
import { classes } from "../utils/class";
import Link from "next/link";
import { navLinks } from "../utils/navData";
import { FunctionComponent, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NextComponentType } from "next";

const NavBar: FunctionComponent = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    //   navbar goes here
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link href="/">
                <a className="flex items-center py-5 px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold">Home</span>
                </a>
              </Link>
            </div>

            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href={"/admin"}>
                <a className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Admin
                </a>
              </Link>
            </div>
          </div>

          {/* secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href={"/login"}>
              <a className="py-5 px-3 text-black">Login</a>
            </Link>
            <Link href={"/signup"}>
              <a className="px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg rounded transition duration-300">
                Signup
              </a>
            </Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`${!menuToggle ? "hidden" : ""} md:hidden`}>
        <Link href={"/admin"}>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200">Admin</a>
        </Link>

        <Link href={"/login"}>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
        </Link>

        <Link href={"/signup"}>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200">Signup</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
