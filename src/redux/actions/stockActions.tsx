import { Types } from "../enums/consonants";
import React from 'react';
import { getCoinsList } from '../../api';
import { Dispatch } from 'redux';
import axios,{AxiosResponse,AxiosError} from 'axios';
import { Coins } from "../../dataTypes";

// export const getStocks=()=>{
//     return (dispatch:Dispatch)=>{
//         axios.get(`${getCoinsList}`)
//         .then((res)=>{
//             dispatch(getStocksList(res.data))
//         })
//     } 
// }

    
  
export const getStocks=()=>{
    const stocks = JSON.parse(localStorage.getItem("stocks") || "{}");
    if (stocks !== "") {
      return {
        type:Types.GET_STOCKS,
        payload:stocks
      }
    }    
}
