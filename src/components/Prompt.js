import logo from "../images/logo.png";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Prompt = () => {

    return(
<div className="relative container mx-auto p-auto">
<div className='flex items-center justify-between mx-5'>
      <Link to = '/' className='pt-2'>
        <img src ={ logo } alt='' />
      </Link>
      </div>
      <div className='grid grid-cols-1 place-items-center mx-auto py-8 my-20
      px-6 max-w-md rounded-lg  text-center bg-white shadow-lg '>
<div className='text-center items-center place-self-center my-auto mx-5'>
    <h5 className='text-lg font-semibold max-w-xs'>Signup or login to continue</h5>
    <p className='text-sm max-w-xs text-slate-500'>Sed porttitor lectus nibh. Vivamus magna
         justo, lacinia eget consectetur sed, convallis at</p>
</div>
<div className='flex justify-center py-8 max-w-xs'> 
       <Link to = '/' className='px-5 outline outline-1 text-base py-2 font-normal rounded text-white bg-[#0865FF]
      baseline hover:bg-blue-400'>
          <span class="inline-flex items-baseline">
    <FaTwitter className="self-center w-5 h-5 mx-1" />
    <span>Login with Twitter</span>
  </span>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
