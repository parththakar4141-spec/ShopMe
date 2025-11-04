'use client'; // Ensure this is a client component

import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Womens Wear', link: '/viewall' },
  { id: 3, name: 'Kids Wear', link: '/viewall' },
  { id: 4, name: 'Mens Wear', link: '/viewall' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' },
  { id: 3, name: 'Top Rated', link: '/#' },
];

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cart, setCart] = useState([]); // Cart state
  const router = useRouter();

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  const handleCartClick = () => {
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <div className="shadow-md bg-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </a>
          </div>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-200 to-gray-300 rounded-full shadow-md hover:from-gray-300 hover:to-gray-400 hover:scale-105 transition-all duration-300 ease-in-out border border-gray-300 hover:border-gray-400"
            >
              <FaCartShopping size="20" className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cart.length}
                </span>
              )}
            </button>


            {/* Login Button */}
            <button
              onClick={toggleLoginModal}
              className="bg-primary text-white py-1 px-4 rounded-full hover:bg-primary-dark"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <LoginModal toggleLoginModal={toggleLoginModal} />
      )}
    </div>
  );
};

export default Navbar;
