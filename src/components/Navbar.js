import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Akhil Bachubhay
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/akhil-bachubhay/"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:underline hover:text-white text-gray-300 rounded text-base mt-4 md:mt-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/abachubhay255"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:underline hover:text-white text-gray-300 rounded text-base mt-4 md:mt-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
