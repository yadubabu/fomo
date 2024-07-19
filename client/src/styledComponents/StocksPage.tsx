import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { getStocks } from '../redux/actions/stockActions';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Stocks } from '../dataTypes';
import { AppState } from '../redux/store';

type Props = {}

function StocksPage({}: Props) {
  const dispatch:Dispatch<any> =useDispatch();
  const stocks=useSelector<AppState,Stocks[]>((state)=>state.stocks)
  useEffect(()=>{
    dispatch(getStocks());
  },[])
  return (
    <div className='bg-slate-800 rounded-md m-5 shadow-2xl text-center  pt-5 min-h-full'>
      <div className='text-center w-full h-32'>
      <p className='m-3 text-3xl text-gray-400'>Cryptocurrency Prices Live
      Top Coins by Fomo Factory</p>
      </div>
      
        <div className='flex justify-start'>
        <Link className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/'>Crypto</Link>
        <Link id='stock' className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/stocks'>Stocks</Link>
      </div>
      <hr/>
      {stocks[0].markets !== null && stocks.slice(0,5).map((stock:Stocks)=>{
        return(
            <div className='m-5 bg-gray-600 rounded-md max-w-full flex justify-evenly p-2'>
              <a href="#" className="flex flex-col p-6 hover:bg-gray-600 hover:border-black min-w-[400px] ">
              <div className='flex -mx-4'>
                    <img src={stock.png64} className='w-10 m-4 '/>
                      <h5 className="text-3xl my-3 font-bold tracking-tight text-gray-900 dark:text-white">{stock.name}</h5>
                  </div>
                <div className='flex justify-between'>
                  
                  <div className='flex flex-col'>
                    <label className='text-gray-400 text-sm'>24H VOLUME</label>
                    <p className='text-white'>{Math.round(stock.volume)}</p>
                  </div>
                  <div>
                  <label className='text-gray-400 text-sm'>BIDS -2%</label>
                  <p className='text-white'>{Math.round(stock.bidTotal)}</p>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='flex flex-col'>
                    <label className='text-gray-400 text-sm'>MARKETS</label>
                    <p className='text-white'>{Math.round(stock.markets)}</p>
                  </div>
                  <div>
                  <label className='text-gray-400 text-sm '>ASKS +2%</label>
                  <p className='text-white'>{Math.round(stock.askTotal)}</p>
                  </div>
                </div>
         
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
              </a>
            </div>
        )
      })}
    </div>
  )
}

export default StocksPage

