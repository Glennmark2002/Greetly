import React from 'react';
import { useStore, useTempStore } from '../utils/zustand';
import axios from 'axios';

function UserProfile() {

  const { currentUser, signOut, signOutStart } = useStore();
  const { loadingStart, loadingClose } = useTempStore();

  const handleSignout = async () => {
    try {
      loadingStart();
      await axios.get('/api/auth/signout');
      signOut()
      loadingClose();
    } catch (error) {
      loadingClose();
    }
  }

  return (
    <div className='dropdown dropdown-end'>
      { currentUser && 
        <div>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
            <img src={currentUser.picture} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 z-50 rounded-box mt-3 w-52 p-2  border-2 border-base-content">
            <li><a> Profile </a> </li>
            <li><a>Settings</a></li>
            <li><a onClick={handleSignout} >Logout</a></li>
          </ul>
        </div>
      }
    </div>
  );
}

export default UserProfile;
