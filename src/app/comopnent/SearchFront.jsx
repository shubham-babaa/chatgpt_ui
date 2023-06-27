"use client"
import React, { useState, useEffect, useContext, useRef } from 'react';


import { LuChevronRight } from "react-icons/lu";

import { MyContext } from './Context';
import Apicall from '../api/Apicall'
import Loding from '../loading'
const BardUI = () => {
  const { object, updateObject,historyobj } = useContext(MyContext);

  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [searcharray, setSearcharray] = useState([]);
  console.log(historyobj);
 
  const handleSearch = async () => {

    setSearcharray((prev) => [...prev, searchQuery]);
   
    updateObject(searchQuery, 'user');

    const arrayString = JSON.stringify(object);
   console.log(typeof(arrayString))
    if (typeof window !== 'undefined' && window.localStorage) {
      const existingData = localStorage.getItem('putItems');
      const existingArray = existingData ? JSON.parse(existingData) : [];
      // const newItem =arrayString;
      existingArray.push(searchQuery);

      // Access and use localStorage
      localStorage.setItem('putItems',JSON.stringify(existingArray));
    }
    
    sendMessage(searchQuery)

  }; 
  // function search(){
  //   handleSearch();
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (historyobj.length !== 0) {
  //             setSearchQuery(historyobj);
  //             await search();
  //         // Use await to wait for handleSearch() to complete
  //     }
  //   };
  
  //   fetchData();
  // }, [historyobj]);
  
  // useEffect(() => {
  //   console.log(searchQuery);
    
  // }, [searchQuery]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();

    }
  };


  const sendMessage = async (message) => {
    setLoading(true);
    setSearchQuery('');
    try {

      const response = await Apicall(message);

      const { out } = response;
      console.log(out)

      updateObject(out, 'bot');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

  }

  // useEffect(() => {
  //   console.log(object);
  // }, [object]);

  return (
    <div className='min-h-screen w-full z-0 bg-gray-900  pt-6 border-t-4 border-rose-950 '>
      <div className="flex flex-col h-[90vh] overflow-y-auto custom-scroll ">
        <div className="flex flex-col space-y-4">
          {
            object.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end px-4' : 'justify-start px-4'
                }`}>
                <div className={`${message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                  } rounded-lg p-4 text-white max-w-sm`}>
                  {message.message}
                </div>
              </div>
            ))}
          {
            loading &&
            <div key={object.length} className="flex justify-start px-4">
              <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                <Loding />
              </div>
            </div>
          }

        </div>
       

      </div>

      <div className=" w-[70%]  sm:w-[62.5%]  mx-auto  top-[90vh]  mb-12 justify-center items-center  py-2 flex  border border-gray-400 bg-slate-100  rounded-3xl px-4">
        <input type="text" className="flex-grow px-4 py-2 bg-transparent text-black  focus:outline-none" placeholder="Type your message..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} />
        <button type="submit" className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300" onClick={handleSearch}>Send</button>
      </div>
    </div>
  );
};

export default BardUI;
