import { Scan, LucideGitPullRequestCreate } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useStore } from '../utils/zustand';
import axios from 'axios';
import QRCode from 'qrcode';

function Home() {

  const url = import.meta.env.VITE_DB; 
  const [imageURL, setImageURL] = useState();
  const [data, setData] = useState();
  const { currentUser } = useStore();

  const handleClick = async () => {
    const res = await axios.post(`${url}/api/qr/create`, {
      user : currentUser._id, 
      text : 'Ginamos',
    });

    setData(res.data); 
  }; 

  useEffect(() => {

    const fetch = async () => {
      const res = await axios.post(`${url}/api/qr/get`, { user : currentUser._id });
      if(res.data.length > 0) {
        const qr = await QRCode.toDataURL(res.data[0]._id);
        setImageURL(qr);
        setData(res.data[0])
      }
    }

    fetch();
  }, [data]);

  return (
    <div className='h-screen pt-20 p-4 flex flex-col items-center justify-center gap-4 '>

      { data ? 
        <p className={`absolute top-24 text-lg p-2 -z-50 text-black rounded-lg ${ data.status === 'pending' ? 'bg-gray-400' : 'bg-green-400' }`}> status - {data.status} </p>
        : 
        <button className="btn btn-neutral w-11/12 max-w-sm absolute top-20" onClick={handleClick} > Create Request </button>
      }


      <img src={imageURL} className='w-72 h-auto rounded-2xl' />
      {/* <Scan className='fixed w-full lg:max-w-lg h-auto ' strokeWidth={0.5}/> */}
    </div>
  );
}

export default Home;
