import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { Coins } from '../dataTypes';
import { pics } from '../pics';
import { Link } from 'react-router-dom';
import './style.css'

type Props = {}

const TableComp = (props: Props) => {
const coins=useSelector<AppState,Coins[]>(state=>state.coins)
  return (
    <div className='bg-slate-800 rounded-md m-5 shadow-2xl text-center  pt-5'>
        <div className='flex justify-start'>
        <Link id='coin' className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/'>Crypto</Link>
        <Link className='bg-gray-900 p-2 gap-x-2 ml-3 rounded-lg shadow-2xl mb-3' to='/stocks'>Stocks</Link>
      </div>
      <hr/>
      <div className="table w-full ... ">
        <div className="table-header-group ...">
          <div className="thead table-row ">
            <div className="table-cell text-center ... p-4">S.No</div>
            <div className="table-cell text-center ...">Code</div>
            <div className="table-cell text-center ..."></div>
            <div className="table-cell text-center ...">Price</div>
            <div className="table-cell text-center ...">Volume</div>
          </div>
        </div>
        {coins[0].cap !== null && coins.slice(0,20).map((coin:Coins,index:number=0)=>{
          return(<>
          <hr/>
            <div key={index} className="tbody table-row ... p-5 m-5 bg-gray-800">
              <div className="table-cell ... p-4">{index+1}</div>
              <div className="table-cell ... code">{coin.code}</div>
              <div className="table-cell ..."><img className='w-1/5 -my-4' src={require(`../assets/${coin.code.toLowerCase()}.webp`)} alt=''/></div>
              <div className="table-cell ...">{Math.ceil(coin.rate)}</div>
              <div className="table-cell ...">{coin.volume}</div>
              
            </div>
            </>)
        })}
    
      </div>
    </div>
  )
}

export default TableComp;
