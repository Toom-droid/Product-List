import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/"
            className="text-2xl no-underline text-gray-700 hover:text-blue-950"
          >
            MERN - 3
          </a>
        </div>
        <div className="flex gap-5">
          <a
            href="/add"
            className="text-lg no-underline text-gray-700 hover:text-blue-950 ml-2"
          >
            Add
          </a>
          <a
            href="/"
            className="text-lg no-underline text-gray-700 hover:text-blue-950 ml-2"
          >
            List
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
