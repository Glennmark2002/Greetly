import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import History from './pages/History';
import { useStore } from './utils/zustand';
import Loading from './components/Loading';
import RequestForm from './pages/RequestForm';

function App() {

  const { currentUser } = useStore();

  return ( 
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Loading />
      <Routes>
        <Route path='/'        element={ currentUser ? <Navigate to='/home' /> : < Signin /> } />
        <Route path='/sign-in' element={ currentUser ? <Navigate to='/home' /> : < Signin /> } />
        <Route element={ <PrivateRoute /> }>
          <Route path='/home'    element={ <Home /> } />
          <Route path='request-form' element={ <RequestForm /> } />
          <Route path='/history' element={ <History /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
