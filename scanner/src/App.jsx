import Navbar from './components/Navbar';
import { useState } from 'react';
import QRScanner from './components/QRScanner';

function App() {

  const [scannedData, setScannedData] = useState(null);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Navbar />
      <QRScanner onScan={(data) => setScannedData(data)} />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
}

export default App;
