import { authenticate } from "../utils/firebase";
import axios from 'axios';

function OAuth() {

  const handleClick = async () => {

    const result = await authenticate()
    console.log(result)
    
    const res = await axios.post('http://localhost:3000/api/auth/google', {
      name : result.user.displayName,   
      email : result.user.email,  
      photo : result.user.photoURL
    }); 

    console.log(res.data);
  }

  return <button onClick={handleClick}> Google </button>
}

export default OAuth;



