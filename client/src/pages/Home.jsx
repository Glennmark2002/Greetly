import { useEffect, useState } from 'react';
import { useStore } from '../utils/zustand';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function Home() {
  
  const { currentUser } = useStore();

  const fetchQrData = async () => {
    const res = await axios.post('/api/qr/get', { user : currentUser._id }); 
    return res.data;
  }

  const { data, isLoading } = useQuery({ 
    queryKey: ['qr-data', currentUser?._id],
    queryFn: fetchQrData,
    refetchInterval: 2000,
  }); 

  return (
    <div className='h-screen pt-20 p-8 flex flex-col items-center justify-center gap-4 '>
      { isLoading ? <p className='loading loading-dots loading-lg' /> : ( data.qr ? <img src={data.qr} className='w-64 rounded-2xl' /> :  <Link to='/request-form' className='btn btn-neutral w-11/12 max-w-sm'> Create Request </Link> ) }
      { data?.status && <p className={`absolute top-24 text-lg p-2 -z-50 text-black rounded-lg ${ data.status === 'pending' ? 'bg-gray-400' : 'bg-green-400' }`}> status - {data.status} </p> }
    </div>
  );
}

export default Home;
