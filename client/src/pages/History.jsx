import { useStore } from '../utils/zustand';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';

function History() {

  const { currentUser } = useStore();
  const fetchHistory = async () => {
    const res = await axios.post('/api/qr/archive', { user : currentUser._id }); 
    return res.data;
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ['history', currentUser?._id],
    queryFn: fetchHistory,
  });  
  


  console.log(data)

  
  // const [formData, setFormData] = useState([]);

  // useEffect(() => { 
  //   const fetchData = async () => {
  //     const res = await axios.post('/api/qr/archive', { user : currentUser._id });
  //     setFormData(res.data);
  //   }

  //   fetchData();
  // }, [])

  return (
    <div className='h-screen flex items-center pt-20 p-4 flex-col gap-6'>
      {/* { data.map(i => <Card key={i._id} data={i} />) } */}
    {isLoading && <div>Loading...</div>}
    {error && <div>Error loading history.</div>}
    {data && data.map(i => <Card key={i._id} data={i} />)}
    </div>
  );
}

export default History;




// import React from 'react';
// import { useStore } from '../utils/zustand';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import Card from '../components/Card';

// function History() {

//   const { currentUser } = useStore();
//   const [formData, setFormData] = useState([]);

//   useEffect(() => { 
//     const fetchData = async () => {
//       const res = await axios.post('/api/qr/archive', { user : currentUser._id });
//       setFormData(res.data);
//     }

//     fetchData();
//   }, [])

//   return (
//     <div className='h-screen flex items-center pt-20 p-4 flex-col gap-6'>
//       { formData.map(i => <Card key={i._id} data={i} />) }
//     </div>
//   );
// }

// export default History;
