import { QrCode } from 'lucide-react';
import logo from '../assets/qr-code.svg'
// import Theme from './Theme';

function Navbar() {

  return (
    <div className='navbar bg-base-100 fixed top-0 '>
      <div className='navbar-start gap-4'>
        <p className='btn btn-ghost font-bold text-2xl gap-2'>
          <QrCode className='w-10 h-auto' />
          Greetly Scan.
        </p>
      </div>
        
      <div className='navbar-end'>
        {/* <Theme /> */}
      </div>
    </div>
  );
}

export default Navbar;
