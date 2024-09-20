import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent md:py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex justify-end items-center">
        <ul className="flex gap-2 sm:gap-4 md:gap-6 list-none">
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white-500 font-bold hover:text-grey-700 text-sm md:text-base`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white-500 font-bold hover:text-green-700 text-sm md:text-base`}
            >
              SIGN-IN
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white-500 font-bold hover:text-green-700 text-sm md:text-base`}
            >
              TEAM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;