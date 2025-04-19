import { useTempStore } from "../utils/zustand";
import { QrCode, History, SidebarClose, Database, Logs } from 'lucide-react';
import { Link } from "react-router-dom";

function Sidebar() {

  const { openSidebar, sidebar } = useTempStore();

  return (
    <div>
      { sidebar && <span className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={openSidebar}/> }
      <div className={`fixed inset-y-0 left-0 bg-base-100 z-50 w-2/3 max-w-sm transform ${sidebar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out flex`}> 
        <button className='fixed top-4 right-4 ' onClick={openSidebar}> <SidebarClose/>  </button>
        <ul className='pt-20 w-full flex flex-col gap-4 p-4' onClick={openSidebar}>
          <Link to='/logs' className='btn btn-ghost justify-start gap-4 text-base'> <Logs /> Logs </Link>       
          <Link to='/records' className='btn btn-ghost justify-start gap-4 text-base'> <Database /> Records </Link> 
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
