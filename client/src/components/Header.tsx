import React from 'react'
import Navbar from './Navbar';

type Props = {}

function Header({}: Props) {
  return (
    <div className='bg-slate-800 grid sm:grid-cols-2 gap-8 p-6 w-full sm:flex-col sm:justify-stretch'>
      <div className=''>
        <h1 className='text-center font-serif text-5xl m-5' ><span className='text-red-500'>F</span>omo<span className='text-red-500'>F</span>actory</h1>
      </div>
      <div className=''>
        <Navbar/>
      </div>
    </div>
  )
}

export default Header