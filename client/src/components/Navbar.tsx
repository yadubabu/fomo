import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import '../styledComponents/style.css'


type Props = {}

function Navbar() {
  return (
    <div className='p-3 text-gray-200 '>
      <div className='flex gap-x-2 items-center sm:right-2'>
        <input className='m-2 pl-7 text-black rounded-xl relative text-sm p-1' type='text' placeholder='Enter Stock/Crypto'/>
        <FaSearch className=' absolute text-gray-700 mx-2 cursor-pointer bg-gray-300 text-black pe-1 px-1 size-6 search'/>
        <RxAvatar className='cursor-pointer size-10'/>
      </div>
      <div className=''>
        <ul className='flex justify-between mt-5 '>
        <li className=''>
        <a href='/' className='hover:bg-white hover:text-black hover:m-4 p-2 rounded-2xl'>Home</a>

        </li>
        <li className=''>
        <a href='/login' className='hover:bg-white hover:text-black hover:m-4 p-2 rounded-2xl'>Login</a>

        </li>
        <li className=''>
        <a href='/register' className='hover:bg-white hover:text-black hover:m-4 p-2 rounded-2xl'>Register</a>

        </li>
        <li className=''>
        <a href='/about' className='hover:bg-white hover:text-black hover:m-4 p-2 rounded-2xl'>About</a>

        </li>
      </ul>
</div>
    </div>
  )
}

export default Navbar
