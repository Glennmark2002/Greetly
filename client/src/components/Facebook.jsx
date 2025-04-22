import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { app } from '../utils/firebase';
import axios from 'axios';
import { useStore } from '../utils/zustand';
import { useNavigate } from 'react-router-dom';

function Facebook() {

  const { signInSuccess } = useStore();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const auth = getAuth(app); 
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post('/api/auth/google', {
        name : result.user.displayName, 
        email : result.user.email, 
        photo : result.user.photoURL
      }); 
      
      signInSuccess(res.data); 
      navigate('/home');
    } catch (error) {
      console.log(error)
    }
    
  }


  return <button className='btn btn-neutral w-3/4 max-w-md' onClick={handleClick}> FishBool </button>
}

export default Facebook;
