import React from 'react'
import { Types } from '../enums/consonants'
import { Coins } from '../../dataTypes'

const initialValue:Coins[]=[
    {
        cap:1,
    code:'BTC',
    delta:{
        hour:1,
        day:1,
        week:1,
        month:1,
        quarter:1,
        year:1,
    },
    rate:1,
    volume:1,
    }
]
    


export interface CoinState{
    type:string,
    payload:Coins[]
}

// eslint-disable-next-line no-empty-pattern
const coinReduser=(state=initialValue,action:CoinState)=> {
    // const {type,payload}=action;
   console.log(action.payload);
    
  if(action.type===Types.COIN_LIST){
    return [...action.payload]
    
  }
  else {
    return state;
  }
}

export default coinReduser