import { useStore } from "../utils/zustand";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {

  const { currentUser } = useStore();

  return (
    <div> { currentUser ?  <Outlet /> : <Navigate to='sign-in' />} </div>
  );
}

export default PrivateRoute;
