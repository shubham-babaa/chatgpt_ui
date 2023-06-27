'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BardUI from './comopnent/SearchFront'
import Navbar from './comopnent/Navbar'
import { MyContextProvider } from './comopnent/Context';
import Dashbord from './comopnent/Dashbord'
export default function Home() {


  return (
    <main className="  ">
      <MyContextProvider>
       <Dashbord/>

      </MyContextProvider>
    </main>
  );
}