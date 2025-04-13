import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { Scan } from 'lucide-react';
import UserDetail from './UserDetail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useStore, useTempStore } from '../utils/zustand';

function QRScanner() {

  const [scannedData, setScannedData] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useStore();
  const videoRef = useRef(null);
  let scanner = null;  
  
  useEffect(() => {
    if(videoRef.current) { 
      scanner = new QrScanner(videoRef.current, (result) => {
        
        const fetch = async () => {
          const res = await axios.put('https://greetly-api.onrender.com/api/qr/scan', result.data);
          setScannedData(res.data);
          setUser(res.data);
          navigate('/user-detail');  
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
      <Scan className='w-80 lg:max-w-lg h-auto fixed' strokeWidth={0.5}/>
      {/* <UserDetail data={scannedData}  /> */}
      <video ref={videoRef} className="w-full -z-50" />
    </div>
  );
}

export default QRScanner;





// import QrScanner from 'qr-scanner';
// import { useEffect, useRef } from 'react';
// import { Scan } from 'lucide-react';

// function QRScanner({ onScan }) {

//   const videoRef = useRef(null);
//   let scanner = null;   

//   useEffect(() => {
//     if(videoRef.current) { 
//       scanner = new QrScanner(
//         videoRef.current, (result) => { onScan(result.data) },
//         { returnDetailedScanResult: true, 
//          }
//       ); 
//       scanner.start();
//     }

//     return () => {
//       if (scanner) scanner.stop();
//     };
//   }, [onScan]);

//   return (
//     <div className="relative w-full max-w-md mx-auto flex justify-center items-center">
//       <Scan className='w-80 lg:max-w-lg h-auto fixed' strokeWidth={0.5}/>
//       <video ref={videoRef} className="w-full -z-50" />
//     </div>
//   );
// }

// export default QRScanner;
