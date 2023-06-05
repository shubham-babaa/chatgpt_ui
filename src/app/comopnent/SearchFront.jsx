"use client"
import React, { useState, useEffect, useContext } from 'react';
import SearchBack from './SearchBack';
import Datareturn from './Datareturn'
import { LuChevronRight } from "react-icons/lu";
import HistoryBox from './HistoryBox'
import { MyContext } from './Context';
const BardUI = () => {
  const{object,updateObject}=useContext(MyContext)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState('');
  const [searcq, setSeaecq] = useState('');
  // const [object,setObject]=useState([]);
  const handleSearch = async () => {
    const data = await SearchBack(searchQuery);
    setSeaecq(searchQuery);
    setSearchData(data);
   
    const newObject = {"q":searchQuery ,"data":data }; 
  updateObject(newObject)
    console.log(object)
    setSearchQuery('');
  };

  useEffect(() => {
    console.log(searchData, searcq);
  }, [searchData, searcq]);

  return (
    <div className=' min-h-screen  w-full z-0 bg-gray-500 sm:pt-[5%] py-[30%]'>
      {/* <div className="h-full overflow-y-auto  px-4 ">
        {searcq && (
          <div className=" mb-4 text-center  rounded-lg bg-gray-100">
            {searcq}
          </div>
        )}
        {searchData && (
          <div className=" h-full rounded-lg  bg-gray-100 p-3 mb-10">
            Search Results:
            {searchData}
          </div>
        )}
      </div> */}
      <HistoryBox object={object}/>
      <Datareturn searcq={searcq} searchData={searchData} object={object}/>
      <div className="h-[15vh] sm:h-[200px] w-full sm:w-[62.5vw] bg-slate-600 sm:pb-[15vh]  fixed top-[87vh]  flex justify-center items-center  ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[70%] sm:w-auto border-gray-300 rounded-l-md py-2 px-3  sm:mb-0 sm:mr-2  mr-1 focus:outline-none focus:border-blue-500"
          placeholder="Search for stories..."
        />
        <button
          className=" text-[40px] bg-cyan-500 text-white font-semibold  rounded-r-md"
          onClick={handleSearch}
        >
       <LuChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default BardUI;
