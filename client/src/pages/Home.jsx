import { useEffect, useState } from 'react';
import { useStore } from '../utils/zustand';
import axios from 'axios';
import RequestForm from './RequestForm';

function Home() {

  const url = import.meta.env.VITE_DB;  
  const [imageURL, setImageURL] = useState();
  const [status, setStatus] = useState();
  const { currentUser, loadingStart, loadingClose } = useStore();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.post(`${url}/api/qr/create`, { 
        user : currentUser._id,
        contactNumber : "123456789101112",
        purpose : "TESTING ", 
        appointmentDate : "April, 28, 2025",
        appointmentTime : "1:00 am"
      })
      setImageURL(res.data.qr);
      setStatus(res.data.status)
    };

    fetch();

  }, [])

  return (
    <div className='h-screen pt-20 p-8 flex flex-col items-center justify-center gap-4 '>
      {/* { status ? <p className={`absolute top-24 text-lg p-2 -z-50 text-black rounded-lg ${ status === 'pending' ? 'bg-gray-400' : 'bg-green-400' }`}> status - {status} </p> : <button className="btn btn-neutral w-11/12 max-w-sm"> Create Request </button>   }
        <img src={imageURL} className='w-64 rounded-2xl' /> */}
      <RequestForm />
    </div>
  );
}

export default Home;