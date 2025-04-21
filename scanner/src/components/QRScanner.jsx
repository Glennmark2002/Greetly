import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { Scan } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useStore } from '../utils/zustand';
import axios from 'axios';

function QRScanner() {

  const navigate = useNavigate();
  const { setUserData } = useStore();
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  let scanner = null;  
  
  useEffect(() => {

    if(videoRef.current) { 

      scanner = new QrScanner(videoRef.current, (result) => {

        const fetch = async () => { 
          setLoading(true)
          const res = await axios.put('/api/qr/scan', { _id : result.data});
          scanner.stop();
          setUserData(res.data);
          setLoading(false)

          if(res.data.status === 'pending') {
            navigate('/user-detail'); 
          } else { 
            navigate('/user-detail-checkin');
          }
        }
        
        fetch();        
      },
      { returnDetailedScanResult: true }); 
      scanner.start();
    }

    return () => {
      if (scanner) scanner.stop();
    };
  }, []);

  return (
    <div className="relative w-full h-screen max-w-md mx-auto flex flex-col justify-center items-center">
      { loading ? <p>Loading ...</p> : <Scan className='w-80 lg:max-w-lg h-auto fixed' strokeWidth={0.5}/>  }
      <video ref={videoRef} className="w-full -z-50" />
    </div>
  );
}

export default QRScanner;