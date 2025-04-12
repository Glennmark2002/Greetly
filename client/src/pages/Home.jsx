import { Scan } from 'lucide-react'

function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      home
      <Scan className='fixed w-full lg:max-w-lg h-auto ' strokeWidth={0.5}/>
    </div>
  );
}

export default Home;
