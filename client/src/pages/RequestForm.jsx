import { useState } from "react";
import { useStore } from "../utils/zustand";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function RequestForm() {

  const { currentUser } = useStore();  
  const url = import.meta.env.VITE_DB; 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ user : currentUser._id });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/api/qr/create`, formData);
      navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => setFormData({...formData, [e.target.id] : e.target.value});
 
  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='max-w-lg p-4 flex flex-col items-center gap-4 w-full'>
        <textarea onChange={handleChange} id='purpose' required placeholder='purpose' maxLength={199} className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm h-40 resize-none' />
        <input    onChange={handleChange} id='contactNumber' required type='number' placeholder='Contact Number' className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm'></input>
        <input    onChange={handleChange} id='appointmentDate' type='datetime-local' required className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm' />
        <button className='btn btn-neutral rounded-2xl w-11/12 max-w-sm text-base'> Submit </button>
      </form>
    </div>
  );
}

export default RequestForm;
