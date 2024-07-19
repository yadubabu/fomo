import React from 'react';
import { combineReducers } from 'redux';
import coinReduser from './coinReduser';
import stockReduser from './stockReducer';



// eslint-disable-next-line no-empty-pattern
const rootReducer=combineReducers({
    coins:coinReduser,
    stocks:stockReduser
})

export default rootReducer
