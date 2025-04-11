import React from 'react';
import { useStore } from '../utils/zustand';

function UserProfile() {

  const { currentUser } = useStore();

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
        <img src={currentUser.picture} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  border-2 border-neutral">
        <li><a className="justify-between"> Profile </a> </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  );
}

export default UserProfile;
