import React from 'react';
import { useTempStore } from '../utils/zustand';

function Loading() {

  const { loading } = useTempStore();

  return (
    <>
      { loading && 
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center '>
          <span className='loading loading-dots loading-lg ' />
        </div>  
      }
      
    </>
  );
}

export default Loading;
