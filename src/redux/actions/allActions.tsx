import { Types } from "../enums/consonants";
import React from 'react';
import { getCoinsList } from '../../api';
import { Dispatch } from 'redux';
import axios,{AxiosResponse,AxiosError} from 'axios';
import { Coins } from "../../dataTypes";

export const getData=()=>{
    return (dispatch:Dispatch)=>{
        axios.get(`${getCoinsList}`)
        .then((res)=>{
            dispatch(getCoinList(res.data))
        })
    } 
}
export const getCoinList=(data:Coins[])=>{
    return{
        type:Types.COIN_LIST,
        payload:data
    }
}
