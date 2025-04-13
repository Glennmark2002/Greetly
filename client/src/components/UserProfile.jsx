import React from 'react';
import { useStore } from '../utils/zustand';
import axios from 'axios';

function UserProfile() {

  const { currentUser, signOut, signOutStart } = useStore();
  const url = import.meta.env.VITE_DB;

  const handleSignout = async () => {
    try {
      signOutStart()
      await axios.get(`${url}/api/auth/signout`);
      signOut()
    } catch (error) {
      console.log(error);
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
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2  border-2 border-neutral">
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
