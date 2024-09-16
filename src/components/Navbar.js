// components/Navbar.js
"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li className="relative group">
            <button 
              className="hover:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu 1
            </button>
            {isOpen && (
              <ul className="absolute bg-white text-gray-800 p-2 rounded shadow-lg">
                <li><a href="#" className="block py-1 hover:bg-gray-100">Submenu 1</a></li>
                <li><a href="#" className="block py-1 hover:bg-gray-100">Submenu 2</a></li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button className="hover:text-gray-300">Menu 2</button>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 p-2 rounded shadow-lg">
              <li><a href="#" className="block py-1 hover:bg-gray-100">Submenu 1</a></li>
              <li><a href="#" className="block py-1 hover:bg-gray-100">Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;