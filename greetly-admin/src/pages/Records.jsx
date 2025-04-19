import axios from 'axios'; 
import { useState, useEffect } from 'react';
import Table from '../components/Table';

function Records() {

  const [formData, setFormData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      const res = await axios.get('/api/qr/users');
      setFormData(res.data);
    };  
    fetchData();

    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full max-w-6xl h-[400px] overflow-auto border-2'>
        <table className='table w-full'> 
          <thead className='sticky top-0 bg-base-100 z-10'>
            <tr>
              <th className='bg-transparent text-sm text-center text-base-content'>User </th>
              <th className='text-sm text-center text-base-content'>Purpose</th>
              <th className='text-sm text-center text-base-content'>Appointment Date</th>
              <th className='text-sm text-center text-base-content'>Status</th>
            </tr>
          </thead>
          <tbody>
            {formData.map(i => <Table data={i} key={i._id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
