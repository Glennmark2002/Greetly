// import { useState, useEffect, useRef } from "react";
// import QrScanner from "qr-scanner";
// import axios from 'axios'
// import { useStore } from "./utils/zustand";

// const App = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const { setUser, userData } = useStore();
//   const videoRef = useRef(null);
//   let scanner = null;

//   useEffect(() => {
//     if (videoRef.current) {
//       scanner = new QrScanner(
//         videoRef.current,
//         (result) => {
//           setScannedData(result.data);
//           setUser(result.data);
//         },
//         {
//           returnDetailedScanResult: true,
//         }
//       );
//       scanner.start();
//     }

//     return () => {
//       if (scanner) scanner.stop();
//     };
//   }, []);

//   console.log(userData);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="flex flex-col justify-center items-center">
//         {/* QR Scanner Video */}
//         <div className="relative w-full max-w-md mx-auto">
//           <video ref={videoRef} className="w-full rounded-lg" />

//           {/* Scanner Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="w-60 h-60 relative">
//               {/* Top Left Corner */}
//               <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></div>
//               {/* Top Right Corner */}
//               <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></div>
//               {/* Bottom Left Corner */}
//               <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></div>
//               {/* Bottom Right Corner */}
//               <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></div>
//             </div>
//           </div>
//         </div>

//         {/* Display Scanned Data */}
//         {scannedData && (
//           <p className="mt-4 text-white bg-black px-4 py-2 rounded">
//             Scanned Data: {scannedData}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




















import Navbar from './components/Navbar';
import QRScanner from './components/QRScanner';
import UserDetail from './components/UserDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await axios.put('http://localhost:3000/api/qr/scan', scannedData ); 
  //     setUserData(res.data);
  //     console.log(res.data);
  //   }

  //   fetch();
  // }, [scannedData])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <QRScanner /> }/>
        <Route path='/user-detail' element={ <UserDetail /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import Navbar from './components/Navbar';
// import { useEffect, useState } from 'react';
// import QRScanner from './components/QRScanner';
// import axios from 'axios';

// function App() {

//   const [scannedData, setScannedData] = useState(null);
//   const [userData, setUserData] = useState();


//   useEffect(() => {
//     const fetch = async () => {
//       const res = await axios.put('http://localhost:3000/api/qr/scan', scannedData ); 
//       setUserData(res.data);
//       console.log(res.data);
//     }

//     fetch();
//   }, [scannedData])

//   return (
//     <div className="h-screen flex flex-col justify-center items-center">
//       <Navbar />
//       <QRScanner onScan={(data) => setScannedData(data)} />
//       { userData && <p> {  userData.text }  </p> }
//       {scannedData && <p>Scanned Data: {scannedData}</p>}
//     </div>
//   );
// }

// export default App;
