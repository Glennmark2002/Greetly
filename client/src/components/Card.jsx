function Card({ data }) {

  console.log(data)
  return (
    // <div className='flex flex-col max-w-lg w-full  gap-4 '>
    //   <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 py-1 border-base-content bg-green-100 px-4  rounded-full text-black'> Appoinment Date </span>{ data.appointmentDate } </p>
    //   <p className='border-2 border-base-content p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-4 py-1 border-base-content bg-green-100 px-4  rounded-full text-black'> Purpose </span>{ data.purpose } </p>
    // </div>

    <div className='flex flex-col max-w-lg w-full border-2 border-base-content rounded-2xl gap-4 -z-10'>
      <p className='p-4 pt-8 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute top-2 bg-green-300 px-4  rounded-full text-black'> Appointment Date </span>{ data.appointmentDate } </p>
      <p className='p-4 rounded-2xl text-base text-center relative flex justify-center'> <span className='absolute -top-2  bg-green-300 px-4  rounded-full text-black'> Purpose </span>{ data.purpose } </p>
      
    </div>
  );
}

export default Card;
