import { Menu } from 'lucide-react';
import { useStore, useTempStore } from '../utils/zustand';
import Theme from './Theme';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

function Navbar() {

  const { currentUser } = useStore();
  const { openSidebar } = useTempStore();

  return (
    <div className='navbar bg-base-100 fixed'>
      <div className='navbar-start'>
        { currentUser && <button className='btn btn-ghost' onClick={openSidebar}> <Menu /> </button> }
        <Link to='/' className='btn btn-ghost font-bold text-2xl'> Greetly. </Link>
      </div>
      <div className='navbar-end'>
        <Theme />
        <UserProfile />
      </div>
    </div>
  );
}

export default Navbar;
