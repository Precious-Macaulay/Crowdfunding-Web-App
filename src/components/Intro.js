import frame from '../images/Frame.png';
const Intro = () => {
    return (
    <div className='container flex flex-col-reverse items-center px-6 
    mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row  '>
<div className='flex flex-col
 mb-32 space-y-12 md:w-1/2 mx-5'>
   <h4 className='max-w-md text-4xl font-bold text-center mt-5
    md:text-4xl md:text-left '>
      Where fundraising becomes fun and social
       </h4>
       <p className='max-w-sm text-center text-darkGrayishBlue
       md:text-left'>
         Sed porttitor lectus nibh. Vivamus magna justo, lacinia 
         eget consectetur sed, convallis at tellus. Vestibulum
          ac diam sit amet quam vehicula elementum sed sit amet dui. Donec
       </p>
       <div className='flex'>
       <div className='flex justify-center md:justify-start'> 
       <a href='https://' className='p-3 outline outline-1 px-6 pt-2 rounded text-xs text-white bg-[#0865FF]
      baseline hover:bg-blue-400'>
        Get Started For Free
      </a>
        </div>
        <div className='flex justify-center md:justify-start'> 
       <a href='https://' className='p-3 outline outline-1 px-6 pt-2 rounded text-xs mx-2 text-[#0865FF] bg-transparent
      baseline hover:bg-blue-400'>
        Merchant Login
      </a>
        </div>
        </div>
 </div>
 <div className='md-w-1/2'>
   <img src= { frame } alt='' />
 </div>
    </div>
      
    );
  }
  
  export default Intro;