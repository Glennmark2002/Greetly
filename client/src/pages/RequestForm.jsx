function RequestForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => console.log(e.target.value)
 
  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='max-w-lg p-4 flex flex-col items-center gap-4 w-full'>
        <textarea placeholder='purpose' maxLength={200} className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm h-40 resize-none' />
        <input type='text' placeholder='Contact Number' className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm'></input>
        <input type='datetime-local' onChange={handleChange} className='bg-base-300 w-11/12 p-3 rounded-2xl text-center max-w-sm' />
        <button className='bg-red-300'> Submit </button>
      </form>
    </div>
  );
}

export default RequestForm;
