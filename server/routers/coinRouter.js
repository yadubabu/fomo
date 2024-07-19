const express=require('express');
const coinSchema=require('../models/coinSchema');
const getCoins=require('../controllers/coinController')
const coinRouter=express.Router();

coinRouter.route('/list').get(getCoins);

module.exports=coinRouter;
