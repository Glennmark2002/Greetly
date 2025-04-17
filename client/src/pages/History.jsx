import React from 'react';
import { useStore } from '../utils/zustand';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../components/Card';

function History() {

  const { currentUser } = useStore();
  const url = import.meta.env.VITE_DB;
  const [formData, setFormData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      const res = await axios.post(`${url}/api/qr/archive`, { user : currentUser._id });
      setFormData(res.data);
    }

    fetchData();
  }, [])

  return (
    <div className='h-screen flex items-center pt-20 p-4 flex-col gap-6'>
      { formData.map(i => <Card key={i._id} data={i} />) }
    </div>
  );
}

export default History;
