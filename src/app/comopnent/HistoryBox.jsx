import React from 'react';

export default function HistoryBox({ object }) {
  let len = object.length - 4;

  return (
    <div className='flex mx-3 justify-start'>
      {object && object.length !== 0 && object.map((s, id) => {
        if (len < id) {
          return (
            <div className='h-full  hidden sm:block rounded-sm mr-2 bg-red-100 p-3 mb-10' key={id}>
              <div className='flex flex-cols'>
                <p>{s.data.slice(0,30)}...{id}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
