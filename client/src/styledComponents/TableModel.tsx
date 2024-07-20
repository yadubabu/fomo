import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Coin } from '../dataTypes';
import './style.css';
import { FaFile } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { TbHexagonLetterXFilled } from "react-icons/tb";
import { FaRedditAlien } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { SiCompilerexplorer } from "react-icons/si";
import { MdOutlineExplore } from "react-icons/md";

type Props = {
    data:Coin,
    code:string,
    setShowModel:Dispatch<SetStateAction<boolean>>,
}

function TableModel({code,data,setShowModel}:Props) {
    // useEffect(() => {
    //     const interval = setInterval(() => {
          
    //       showCard(code)
    
    //     }, 2000); // Reloads the page every 2 seconds
    
    //     return () => clearInterval(interval); // Cleanup the interval on component unmount
    //   }, []);
  return (
    <div className={`tabModel bg-gray-600`}>
        <div className='flex justify-between'>
            <div className='flex mb-4'>
                <div><img src={data.png32} alt='' className='m-4 mr-2 mt-4'/>
                </div>
                <div>
                <h1 className={`m-3 text-3xl italic font-bold bg-${data.color}`}>{data.name}
                </h1>
                <p className='-my-4 text-gray-800 font-semibold font-serif'>{code}</p>
                </div>
                <div className='flex my-3 mx-10 text-2xl'>
                    <p className='text-2xl my-1 text-black font-bold'>$</p>
                    <p className='text-black p-1 font-semibold'>{data.rate.toFixed(2)}</p>
                </div>
              </div>
            <div>
            <button onClick={()=>setShowModel(false)} className='close m-4 font-bold text-gray-900 text-xl'>X</button>
            </div>
        </div>
        <hr />
        <div className='flex justify-evenly'>
            <div className='text-sm '>
                <p className='text-gray-800 font-semibold text-sm p-2 '>MARKET CAP</p>
                <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.markets}</p>
            </div>
            <div className='text-sm'>                
                <p className='text-gray-800 font-semibold text-sm p-2'>VOLUME</p>
                <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.volume}</p>
            </div>
            <div className='text-sm'>                
                <p className='text-gray-800 font-semibold text-sm p-2'>VOLMCAP</p>
                <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.cap}</p>
            </div>
            <div className='text-sm'>                
                <p className='text-gray-800 font-semibold text-sm p-2'>ALL TIME HIGH</p>
                <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.allTimeHighUSD.toFixed(2)}</p></div>
        </div>
        <hr/>
        <div className='flex justify-evenly m-2 p-2 gap-8'>
            <div className=''>
                <div>
                    <div className='flex justify-evenly'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>1H USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.hour}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>24H USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.day}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>7D USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.week}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>30D USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>90D USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>1Y USD</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-evenly'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>1H BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.hour}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>24H BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.day}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>7D BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.week}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>30D BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>90D BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>1Y BTC</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-evenly m-2 p-2'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>1H ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.hour}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>24H ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.day}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>7D ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.week}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>30D ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>90D ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>1Y ETH</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.delta.month}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    <div className='flex justify-evenly'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>CIRC. SUPPLY</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.circulatingSupply}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>TOTAL SUPPLY</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.totalSupply}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>MAX SUPPLY</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3 float-center'>--</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>TOTAL CAP</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.cap}</p></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>RANK</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.rank}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>PAIRS</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.pairs}</p>
                        </div>
                        <div className='text-sm'>                
                            <p className='text-black font-semibold text-sm p-2'>EXCHANGES</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.exchanges}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end m-2 p-2'>
                        <div className='text-sm '>
                            <p className='text-black font-semibold text-sm p-2 '>LIQUIDITY +2</p>
                            <p className='mb-2 text-gray-200 font-semibold pb-3'>{data.liquidity}</p>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <div className='flex cursor-pointer m-2 p-2'>
                <a href='#' className='mx-2 hover:text-red-600'>
                    <AiFillLike/>
                </a>
                <a href='#' className='mx-2 hover:text-red-600'>
                    <AiFillDislike/>
                </a>
                <a href='#' className='mx-2 hover:text-red-600'>
                    <SiCompilerexplorer/>
                </a>
                <a href='#' className='mx-2 hover:text-red-600'>
                    <MdOutlineExplore/>
                </a>
            </div>
            <div className='flex cursor-pointer m-2 p-2 '>
                <a href='#' className='-mt-1'>
                    <span className='mx-2 hover:text-red-600'>{data.symbol}</span>
                </a>
                <a href={data.links.whitepaper}>
                    <FaFile className='mx-2 hover:text-red-600'/>
                </a>
                <a href={data.links.website}>
                    <TbWorldWww className='mx-2 hover:text-red-600'/>   
                </a>
                
                <a href={data.links.reddit}>
                <FaRedditAlien className='mx-2 hover:text-red-600'/>
                </a>
                <a href='#'>
                <FaFacebookF className='mx-2 hover:text-red-600'/>   
                </a>
                <a href='#'>
                <FaDiscord className='mx-2 hover:text-red-600'/>   
                </a>
                <a href='#'>
                <FaGithub className='mx-2 hover:text-red-600'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TableModel


