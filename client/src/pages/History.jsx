import { useStore } from '../utils/zustand';
import axios, { spread } from 'axios';
import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';

function History() {

  const { currentUser } = useStore();
  const fetchHistory = async () => {
    const res = await axios.post('/api/qr/archive', { user : currentUser._id }); 
    return res.data;
  }
  const { data, isLoading } = useQuery({
    queryKey: ['history', currentUser._id],
    queryFn: fetchHistory,
  });  

  return (
    <div className='h-screen flex items-center pt-20 p-4 flex-col gap-6'>
      {isLoading ? ( <span className='h-screen flex justify-center items-center loading loading-dots loading-lg' /> ) : 
                   ( data && data.length > 0 ? ( data.map(i => <Card key={i._id} data={i} />)) :
                   ( <p className='h-screen flex justify-center items-center font-bold text-lg'>No History</p>))}
    </div>
  );
}

export default History;