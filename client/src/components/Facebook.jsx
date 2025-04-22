import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { app } from '../utils/firebase';

function Facebook() {

  const auth = getAuth(app); 
  const provider = new FacebookAuthProvider();

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider); 
      console.log(result.user);
    } catch (error) {
      console.log(error)
    }
    
  }

  return <button className='btn btn-neutral w-3/4 max-w-md' onClick={handleClick}> FishBool </button>
}

export default Facebook;
