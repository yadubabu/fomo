import React from 'react'
import { Types } from '../enums/consonants'
import { Coins, Stocks } from '../../dataTypes'

const initialValue:Stocks[]=[
    {
        name: '4swap',
        volume:1,
        markets:1,
        askTotal:1,
        bidTotal:1,
        code:'gemini',
        png64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.png',
        png128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.png',
        webp64: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/64/4swap.webp',
        webp128: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/128/4swap.webp'
    },
]
    


export interface StockState{
    type:string,
    payload:Stocks[]
}

// eslint-disable-next-line no-empty-pattern
const stockReduser=(state=initialValue,action:StockState)=> {
  if(action.type===Types.GET_STOCKS){
    return [...action.payload]
    
  }
  else {
    return state;
  }
}

export default stockReduser
