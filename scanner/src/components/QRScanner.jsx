import QrScanner from 'qr-scanner';
import { useEffect, useRef } from 'react';
import { Scan } from 'lucide-react';

function QRScanner({ onScan }) {

  const videoRef = useRef(null);
  let scanner = null;   

  useEffect(() => {
    if(videoRef.current) { 
      scanner = new QrScanner(
        videoRef.current, (result) => { onScan(result.data) },
        { returnDetailedScanResult: true }
      ); 
      scanner.start();
    }

    return () => {
      if (scanner) scanner.stop();
    };
  }, [onScan]);

  return (
    <div className="flex justify-center items-center">
      <video ref={videoRef} className="w-full h-auto rounded-lg" />
      <Scan className='fixed w-full lg:max-w-lg h-auto ' strokeWidth={0.5}/>
      
    </div>
  );
}

export default QRScanner;
