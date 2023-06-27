'use client'
import React, { useState,useContext,useEffect} from 'react';
import { FiMenu } from "react-icons/fi";
import { BiArrowFromLeft } from "react-icons/bi";
import { IoRefresh } from 'react-icons/io5';
import { MyContext } from './Context';
import { FaComment } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{object,ClearObject,historySearch}=useContext(MyContext);
  const[history,setHistory]=useState([]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  
  };


  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      // Access and use localStorage
      const storedData = localStorage.getItem('putItems');
      // console.log(storedData);
     const existingData=  storedData? JSON.parse(storedData) : [];

      setHistory(existingData);
      console.log(history)
    }
  }, []);




  const menuStyle = {
    transform: isOpen ? 'translateX(-50%)' : 'translateX(0)',
    transition: 'transform 500ms ease-in-out',
  };
  // const storedArrayString = localStorage.getItem('array');
  // const storedArray = JSON.parse(storedArrayString);
  // console.log(storedArray);
  return (
    <nav className="bg-gray-800 sm:w-[12.5vw] fixed  z-10  w-full">
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
              <ul className="flex flex-col space-y-3 mt-4 ">
            <li className='flex'>
              <button
                onClick={()=>{ClearObject()}}
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-5 py-2 rounded-md md:text-xl font-medium "
              >
                <div className='border-2 border-gray-500 rounded-md px-4'>+ New chat</div>
              </button>
            </li>
            <li >
            <div
              
              className="text-gray-300  sm:text-gray-600  px-3 py-2  text-sm  mb-2  "
            >
            previous 7 days
            </div>
              <div className='max-h-[60vh] overflow-y-auto  ml-12 '  >
             
              <ul >
              {Array.isArray(history) &&
                   history.map((item, index) => (
            <li key={index} className='mb-2 hover:bg-gray-500 rounded-sm text-xl'>
              <button className='flex items-center justify-center px-4 py-2 text-white'  onClick={()=>historySearch(item)}>   <FaComment className='mr-5' /> <p>{item}</p></button>
            </li>
          ))}


              </ul>
              </div>
            </li>
            <li  className='border-t-2  flex item-center justify-center fixed top-[70vh]  w-[80%]  left-[0px]'>
            <div className="w-10 h-10 bg-gray-500 rounded-full mt-5"></div>
         
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
