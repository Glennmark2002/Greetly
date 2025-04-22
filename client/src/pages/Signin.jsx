import OAuth from "../components/OAuth";
import Facebook from '../components/Facebook';

function Signin() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <OAuth />
      <Facebook />
    </div>
  );
}

export default Signin;
