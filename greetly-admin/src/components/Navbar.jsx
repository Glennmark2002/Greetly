import { Menu } from 'lucide-react';
import { useStore, useTempStore } from '../utils/zustand';
import Theme from './Theme';

function Navbar() {

  const { currentUser } = useStore();
  const { openSidebar } = useTempStore();

  return (
    <div className='navbar bg-base-100 fixed'>
      <div className='navbar-start'>
        { currentUser && <button className='btn btn-ghost' onClick={openSidebar}> <Menu /> </button> }
      </div>
      <div className='navbar-end'>
        <Theme />
      </div>
    </div>
  );
}

export default Navbar;
