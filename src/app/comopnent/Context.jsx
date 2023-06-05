"use client"
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [object, setObject] = useState([]);

  const updateObject = (newData) => {
    setObject(prev => [...prev, newData]);
  };
  const ClearObject = () => {
    setObject([]);
  };
  const value = {
   object,
   updateObject,
   ClearObject,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
