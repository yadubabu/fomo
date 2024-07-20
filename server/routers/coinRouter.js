const express=require('express');
 const getCoins=require('../controllers/coinsListController')
const coinRouter=express.Router();
const getSingleCoin=require('../controllers/coinController')

coinRouter.route('/list').get(getCoins);
coinRouter.route('/single/:code').get(getSingleCoin);


module.exports=coinRouter;
