function Table({ data }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <img src={data.user.picture} className='h-12 w-12 rounded-full' />
          <div>
            <div className="font-bold"> {data.user.username} </div>
            <div className="text-sm opacity-50"> {data.user.email} </div>
          </div>
        </div>
      </td>
      <td className='max-w-sm text-center'> {data.purpose} </td>
      <td className='max-w-sm text-center'> {data.appointmentDate} </td>
      <td className='max-w-sm text-center'> 
        <p className={`${data.status === 'pending' ? 'bg-gray-500' : data.status === 'check in' || data.status === 'approved' ? 'bg-green-500' : data.status === 'check out' ? 'bg-red-500' : 'bg-gray-300'} text-center text-black rounded-lg p-1`}>
          {data.status}
        </p> 
      </td>
    </tr>
  );
}

export default Table;