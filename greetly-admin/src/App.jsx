import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Records from './pages/Records';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Logs from './pages/Logs';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/logs' element={ <Logs /> } />
        <Route path='/records' element={ <Records /> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;