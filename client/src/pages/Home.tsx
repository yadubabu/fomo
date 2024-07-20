import React, { useEffect } from 'react'
import TableComp from '../styledComponents/Table'
import './style.css'
type Props = {}

function Home({}: Props) {

  return (
    <div className='flex-col m-2 p-2'>
      
      <div className='text-center w-full h-32'>
      <p className='m-3 text-3xl text-gray-400'>Cryptocurrency Prices Live
      Top Coins by Fomo Factory</p>
      <div className="tradingview-widget-container head">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
      </div>
      </div>
      <div className='text-center w-full h-full '><TableComp/></div>
    </div>
  )
}

export default Home
