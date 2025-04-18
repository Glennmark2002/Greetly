import React, { useEffect } from 'react';
import axios from 'axios'

function App() {

  useEffect(() => { 

    const fetchData = async () => {
      const res = await axios.get('/api/qr/users');
      console.log(res.data);
    };  
  
    fetchData();
  
  }, [])

  return (
    <div className='text-red-500'>
      APP
    </div>
  );
}

export default App;