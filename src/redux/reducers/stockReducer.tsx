import React from 'react'
import { Types } from '../enums/consonants'
import {  Stocks } from '../../dataTypes'

const initialValue:Stocks[]=[
    {
      name: '4swap',
      markets: 1,
      code: '4swap',
      askTotal: 1,
      bidTotal: 1,
      png64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.png',
      png128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.png',
      webp64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.webp',
      webp128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.webp',
      volume: 1
    },
]
    


export interface StockState{
    type:string,
    payload:Stocks[]
}

// eslint-disable-next-line no-empty-pattern
const stockReduser=(state=initialValue,action:StockState)=> {
    console.log(action.payload);
    
    
  if(action.type===Types.GET_STOCKS){
    return [...action.payload]
    
  }
  else {
    return state;
  }
}

export default stockReduser