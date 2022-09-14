import logo from '../images/logo.png';
import { FaTwitter } from "react-icons/fa";

const Prompt = () => {

    return(
<div className="relative container mx-auto p-auto">
<div className='flex items-center justify-between'>
      <div className='pt-2'>
        <img src ={ logo } alt='' />
      </div>
      </div>
      <div className='absolute top-60 container m-auto py-8 px-6 max-w-md box-border rounded-lg  text-center bg-white shadow-lg'>
<div className='text-center items-center'>
    <h5 className='text-lg font-semibold max-w-xs'>Signup or login to continue</h5>
    <p className='text-sm max-w-xs'>Sed porttitor lectus nibh. Vivamus magna
         justo, lacinia eget consectetur sed, convallis at</p>
</div>
<div className='flex justify-center py-8 max-w-xs'> 
       <a href='https://' className='px-5 outline outline-1 text-base py-2 font-normal rounded text-white bg-[#0865FF]
      baseline hover:bg-blue-400'>
          <span class="inline-flex items-baseline">
    <FaTwitter className="self-center w-5 h-5 mx-1" />
    <span>Login with Twitter</span>
  </span>
      </a>
        </div>
      </div>
</div>
    );
}

export default Prompt;