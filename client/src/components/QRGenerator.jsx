import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

function QRGenerator({ imageURL }) {

  const [image, setImage] = useState();

  useEffect(() => {
    const generateQRCode = async () => {
      const qr = await QRCode.toDataURL(imageURL); 
      setImage(qr);
    }

    generateQRCode();
  }, [])


  return <img className='carousel-item h-60 rounded-xl' src={image} /> 

}

export default QRGenerator;
