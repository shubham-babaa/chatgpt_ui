'use client'
import React, { useState,useContext } from 'react';
import { FiMenu } from "react-icons/fi";
import { BiArrowFromLeft } from "react-icons/bi";
import { IoRefresh } from 'react-icons/io5';
import { MyContext } from './Context';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{ClearObject}=useContext(MyContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuStyle = {
    transform: isOpen ? 'translateX(-50%)' : 'translateX(0)',
    transition: 'transform 500ms ease-in-out',
  };
 

  return (
    <nav className="bg-gray-800 sm:w-[25vw] fixed  z-10  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-lg font-bold sm:fixed">My Website</span>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <BiArrowFromLeft /> : <FiMenu />}
            </button>
          </div>
          <div className={`sm:flex sm:left-[0%] sm:bg-inherit sm:text-gray-600 fixed top-[9.5%] left-[100%] w-[300px] rounded-b-md h-[300px] bg-gray-700`} style={menuStyle}>
            <div className="sm:block sm:ml-6">
              <div className="grid grid-rows-4 text-2xl space-x-4 ">
              <ul className="flex flex-col space-y-2 mt-4">
            <li className='flex'>
              <button
                onClick={()=>{ClearObject()}}
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-5 py-2 rounded-md text-sm font-medium"
              >
                <div>  <IoRefresh  className='absolute top-[8.3%] left-[9%] '/>Reset Chat</div>
              </button>
            </li>
            <li>
              <a
                href="/vedio"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </li>
          </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
