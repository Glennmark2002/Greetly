import { useStore } from "../utils/zustand";

function UserDetail() {

  const { userData, setUser } = useStore();
  console.log(userData)



  return (
    <div className='h-screen flex flex-col items-center pt-20 '>
      <img src={ userData.user.picture } className='rounded-full w-28 h-28'/>
      <div className='flex flex-col w-full p-4'>
        <p className=''> { userData.user.username }   </p>
        <p className=''> { userData.status }   </p>
        <p className=''> { userData.text }   </p>
        <button className='btn btn-ghost' onClick={() => setUser(null)} > Check-in </button>
      </div>
      
    </div>
  );
}

export default UserDetail;