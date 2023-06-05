import React from 'react';

export default function Datareturn({ searcq, searchData, object }) {
  return (
    <div className="h-full overflow-y-auto px-4">
      {searcq && (
        object.map((s) => (
          <div key={s.q}>
            <div className="mb-4 text-center rounded-lg bg-gray-100">
              {s.q}
            </div>
            {searchData && (
              <div className="h-full rounded-lg bg-gray-100 p-3 mb-10">
                Search Results:
                {s.data}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
