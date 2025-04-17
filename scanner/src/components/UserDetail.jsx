import { useStore } from "../utils/zustand";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserDetail() {

  const url = import.meta.env.VITE_DB;
  const { userData, setUserData } = useStore();
  const navigate = useNavigate();

  const handleClick = async () => {

    const res = await axios.post(`${url}/api/qr/update`, { _id : userData._id });
    console.log(res.data);
    setUserData(null);
    navigate('/')
  }

  console.log(userData)

  return (
    <div className='h-screen flex flex-col items-center pt-14'>
      <div className="w-full max-w-lg flex flex-col items-center p-4  ">
        <div className='flex w-full p-4 gap-4'>
          <img src={ userData.user.picture } className='rounded-full w-28 h-28'/>
          <div className='w-full flex justify-center items-center'>
            <p className=' bg-amber-200 border-base-content w-full p-3 rounded-2xl text-base text-center relative text-black flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> status </span>{ userData.status } </p>
          </div>
        </div>
        <div className='flex flex-col w-full p-4 gap-6'>
          <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> Full Name </span>{ userData.user.username } </p>
          <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> Email </span>{ userData.user.email } </p>
          <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> Contact Number </span>{ userData.contactNumber } </p>
          <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> Appoinment Date </span>{ userData.appointmentDate }   </p>
          <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 border-2 border-base-content bg-green-100 px-4  rounded-full text-black'> Purpose </span>{ userData.purpose }   </p>
          <button className='btn btn-neutral rounded-2xl mt-5' onClick={handleClick} > Approved </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;