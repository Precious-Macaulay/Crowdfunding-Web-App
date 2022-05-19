import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import frame1 from '../images/frame1.png';

const Fund =() =>{

    return(
<div>
<div className='flex items-center justify-around'>
      <Link to = '/' className='pt-2'>
        <img src ={ logo } alt='' />
      </Link>
      </div>
      <div className='block items-center justify-center text-center mt-5'>
          <h4 className='text-lg font-semibold'>Help Joan get this leather shoes</h4>
          <p className='text-slate-500 text-sm'>by @jack</p>
      </div>

      <div className='container flex flex-col items-center justify-center
    md:mx-auto  mt-10 space-y-0 md:space-y-0 md:flex-row space-x-0'>
        <div className='md-w-1/2 mb-5 md:mb-0'>
   <img src= { frame1 } alt='' />
 </div>
<div className='flex flex-col
 mb-32 space-y-12 md:w-1/2 mx-5 bg-white shadow-xl rounded-md'>

  <form className='p-5'>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="form-group mb-5">
          <label>Firstname</label>
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
      </div>
      <div class="form-group mb-5">
      <label>Lastname</label>
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
      </div>
    </div>
    <div class="form-group mb-5">
    <label>Email</label>
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
         />
    </div>
    <div class="form-group mb-5">
    <label>Phone number</label>
      <input type="number" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
         />
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="form-group mb-6">
      <label>Amount</label>
        <input type="number" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
      </div>
      <div class="form-group mb-6">
      <label>Remark</label>
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
      </div>
    </div>
    <div className='flex justify-center mt-4 mb-3'> 
       <Link to = '/prompt' className='p-2 outline outline-1 px-5 text-sm pt-2 font-normal rounded mx-2 text-white bg-[#0865FF]
      baseline hover:bg-blue-400'>
        Pay Now
      </Link>
        </div>
  </form>
</div>   
 </div>
    </div>
    
    );
}

export default Fund;