import logo from '../images/logo.png';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  
  useEffect(() => {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('menu');
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle ('hidden');
    });
    
  }, []);
    return (
    <nav className="relative container mx-auto p-6">
      <div className='flex items-center justify-between'>
      <div className='pt-2'>
        <img src ={ logo } alt='' />
      </div>
      <div className='hidden md:flex'>
       <div className='flex justify-center md:justify-start'> 
       <Link to="/prompt" className='p-2 outline outline-1 px-5 text-sm pt-2 font-normal rounded text-[#0865FF] bg-transparent
      baseline hover:bg-blue-400' >
       Merchant Login
      </Link>
        </div>
        <div className='flex justify-center md:justify-start'> 
       <a href='https://' className='p-2 outline outline-1 px-5 text-sm pt-2 font-normal rounded mx-2 text-white bg-[#0865FF]
      baseline hover:bg-blue-400'>
        Get Started
      </a>
        </div>
        </div>
{/**/}
<button id='menuBtn' className='block hamburger md:hidden focus:outline-none
'>
<span className='hamburger-top'></span>
<span className='hamburger-middle'></span>
<span className='hamburger-bottom'></span>
</button>
        </div>
        <div className='md:hidden '>
          <div id='menu' className='absolute flex-col items-center hidden self-end
          py-8 mt- 10 space-y-6 font-bold bg-white sm:w-auto
          sm:self-center left-6 right-6 drop-shadow-md'>
        <a href='https://' className='hover:text-darkGrayishBlue'>Merchant Login</a>
        <a href='https://' className='hover:text-darkGrayishBlue'>Get Started</a>
          </div>
        </div>
  </nav>
    );
  }
  
  export default Header;