import React from 'react';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './reducers';
import {thunk} from 'redux-thunk'
import { Coins,Stocks } from '../dataTypes';

export interface AppState{
    value: number ;
    coins:Coins[],
    stocks:Stocks[]
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const createStoreWithMiddleware = composeEnhansers(applyMiddleware(thunk))(
    createStore
  );
  
  export const store = createStoreWithMiddleware(rootReducer);
