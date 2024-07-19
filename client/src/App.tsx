import React,{useState,useEffect} from 'react';
import './App.css';
import TableComp from './styledComponents/Table';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux/store';
import { Dispatch } from 'redux';
import { getCoinList } from './redux/actions/allActions';
import { getData } from './redux/actions/allActions';
// import { getCoinList } from './redux/actions/allActions';
import axios from 'axios';
import { setCoinsList } from './api';
import { Coins, Stocks } from './dataTypes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import StocksPage from './styledComponents/StocksPage';
import { getStocks } from './redux/actions/stockActions';

type Props = {
  // path: string; exact: true; element: Element;
}


const App=({}:Props)=> {
  const dispatch:Dispatch<any> =useDispatch();
  // useEffect(()=>{
  //   dispatch(getStocks());
  // },[])
  useEffect(() => {
    const interval = setInterval(() => {
      
      dispatch(getData())
      // dispatch(getStocks())
    }, 2000); // Reloads the page every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  const fetchStocks=async()=>{
    await fetch('http://localhost:5000/exchanges/list')
          .then((res)=>res.json())
          .then(async(data)=>{
                    await localStorage.setItem('stocks',JSON.stringify(data))
                      })
          .catch(err=>console.log(err));
    }
    
  useEffect(()=>{
    fetchStocks()
  },[]);
  
  return (
    <div className='bg-gray-900 text-white min-w-full min-h-full'>
      <Router>
        <Header/>
        <hr/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<StocksPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
