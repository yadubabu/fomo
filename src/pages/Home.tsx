import React from 'react'
import TableComp from '../styledComponents/Table'

type Props = {}

function Home({}: Props) {
  return (
    <div className='flex-col m-2 p-2'>
      <div className='text-center w-full h-32'>
      <p className='m-3 text-3xl text-gray-400'>Cryptocurrency Prices Live
      Top Coins by Fomo Factory</p>
      </div>
      <div className='text-center w-full h-full '><TableComp/></div>
    </div>
  )
}

export default Home