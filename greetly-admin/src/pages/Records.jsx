import axios from 'axios'; 
import Table from '../components/Table';
import { useQuery } from '@tanstack/react-query'

function Records() {

  const fetchRecords = async () => {
    const res = await axios.get('/api/qr/users'); 
    return res.data;
  }

  const { data, isLoading } = useQuery({queryKey : ['records'], queryFn:fetchRecords, refetchInterval: 2000})

  return (
    <div className='h-screen flex justify-center items-center'>
      { isLoading ? <span className='loading loading-dots loading-lg' /> : 
        <div className='w-full max-w-6xl h-[400px] overflow-auto border-2'>
          <table className='table w-full'> 
            <thead className='sticky top-0 bg-base-100 z-10'>
              <tr>
                <th className='text-sm text-center text-base-content'>User </th>
                <th className='text-sm text-center text-base-content'>Purpose</th>
                <th className='text-sm text-center text-base-content'>Appointment Date</th>
                <th className='text-sm text-center text-base-content'>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(i => <Table data={i} key={i._id} />)}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default Records;
