import { app } from "../utils/firebase";
import axios from 'axios';
import { useStore } from "../utils/zustand";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function OAuth() {

  const { signInStart, signInSuccess, signInFailure } = useStore();
  const navigate = useNavigate();

  const handleClick = async () => {

    try {

      signInStart()
      const provider = new GoogleAuthProvider(); 
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post('/api/auth/google', {
        name : result.user.displayName,   
        email : result.user.email,  
        photo : result.user.photoURL
      });
      signInSuccess(res.data);  
      navigate('/home') 
      
    } catch (error) {
      signInFailure();
    }
  }
  
  return <button className='btn btn-neutral w-3/4 max-w-md' onClick={handleClick}> Gooogol </button>
}

export default OAuth;



