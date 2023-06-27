"use client"
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [object, setObject] = useState([]);
  const[historyobj, setHistoryobj]=useState([]);
  const updateObject = (newData,type) => {
    setObject((prevChatLog) => [...prevChatLog, { type: type, message: newData }]);

  };
  const ClearObject = () => {
    setObject([]);
  };
  const historySearch=(val)=>{
setHistoryobj(val);
  }
  const value = {
   object,
   updateObject,
   ClearObject,
   historySearch,
   historyobj,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
