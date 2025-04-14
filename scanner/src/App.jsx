import Navbar from './components/Navbar';
import QRScanner from './components/QRScanner';
import UserDetail from './components/UserDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

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