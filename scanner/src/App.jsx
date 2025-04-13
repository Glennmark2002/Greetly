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
