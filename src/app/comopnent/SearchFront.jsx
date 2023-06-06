"use client"
import React, { useState, useEffect, useContext, useRef } from 'react';
import SearchBack from './SearchBack';
import Datareturn from './Datareturn';
import { LuChevronRight } from "react-icons/lu";
import HistoryBox from './HistoryBox';
import { MyContext } from './Context';

const BardUI = () => {
  const { object, updateObject } = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState('');
  const [searcq, setSeaecq] = useState('');
  const inputRef = useRef(null);

  const handleSearch = async () => {
    const data = await SearchBack(searchQuery);
    setSeaecq(searchQuery);
    setSearchData(data);

    const newObject = { "q": searchQuery, "data": data };
    updateObject(newObject);

    setSearchQuery('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    console.log(searchData, searcq);
  }, [searchData, searcq]);

  return (
    <div className='min-h-screen w-full z-0 bg-gray-500 sm:pt-[5%] py-[30%]'>
      <HistoryBox object={object} />
      <Datareturn searcq={searcq} searchData={searchData} object={object} />
      <div className="h-[15vh] sm:h-[200px] w-full  sm:w-[62.5%] bg-slate-600 sm:pb-[15vh] fixed top-[85vh] flex justify-center items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-auto border-gray-300 ml-5 rounded-l-md py-2 px-3 sm:mb-0 sm:mr-2 mr-1 focus:outline-none focus:border-blue-500"
          placeholder="Search for stories..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button
          className="text-[40px] bg-cyan-500 text-white mr-5 font-semibold rounded-r-md"
          onClick={handleSearch}
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BardUI;
