const express=require('express');
const stockRouter=express.Router();
const getStocks = require('../controllers/stockController');

stockRouter.route('/list').get(getStocks);

module.exports=stockRouter;