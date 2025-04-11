import { authenticate } from "../utils/firebase";
import axios from 'axios';
import { useStore } from "../utils/zustand";

function OAuth() {

  const { signInSuccess } = useStore();

  const handleClick = async () => {

    const result = await authenticate()
    const res = await axios.post('http://localhost:3000/api/auth/google', {
      name : result.user.displayName,   
      email : result.user.email,  
      photo : result.user.photoURL
    }); 

    signInSuccess(res.data);
  }
  
  return <button className='btn btn-ghost' onClick={handleClick}> Google </button>
}

export default OAuth;



