import { useStore } from "../utils/zustand";
import { useNavigate } from "react-router-dom";

function UserDetail() {

  const { userData, setUserData } = useStore();
  const navigate = useNavigate();

  const handleClick = () => {
    setUserData(null);
    navigate('/')
  }

  console.log(userData)

  return (
    <div className='h-screen flex flex-col items-center pt-20 '>
      <img src={ userData.user.picture } className='rounded-full w-28 h-28'/>
      <div className='flex flex-col w-full p-4'>
        <p className=''> { userData.user.username }   </p>
        <p className=''> { userData.user.email }   </p>
        <p className=''> { userData.status }   </p>
        <p className=''> { userData.purpose }   </p>
        <p className=''> { userData.appointmentDate }   </p>
        <button className='btn btn-ghost' onClick={handleClick} > Check-in </button>
      </div>
      
    </div>
  );
}

export default UserDetail;