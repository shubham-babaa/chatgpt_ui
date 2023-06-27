'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BardUI from '../comopnent/SearchFront'
import Navbar from '../comopnent/Navbar'
import { MyContextProvider } from '../comopnent/Context';

export default function Home() {


  return (
    <main className="  ">
      <MyContextProvider>
        <div className={`sm:grid sm:grid-cols-8 `}>
          <div className=" col-span-1">
            <Navbar />

          </div>
          <div className=" col-span-6">
            <BardUI />
            {/* <Dashbord /> */}
          </div>
          {/* <div className="cols-span-1">

        </div> */}
          </div>

      </MyContextProvider>
    </main>
  );
}