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
    <div className="relative w-full max-w-md mx-auto flex justify-center items-center">
      {/* <Scan className='w-80 lg:max-w-lg h-auto fixed ' strokeWidth={0.5}/> */}
      <video ref={videoRef} className="w-full -z-50" />
    </div>
  );
}

export default QRScanner;
