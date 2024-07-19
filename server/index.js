const express=require('express');
const cors=require('cors');
const dotEnv=require('dotenv');
const bodyParser=require('body-parser');
const connect=require('./connectDB');
const coinSchema = require('./models/coinSchema');
const stockRouter=require('./routers/stockRouter')
const coinRouter=require('./routers/coinRouter');
const stockSchema = require('./models/stockSchema');

// app.use(dotEnv.config())
const app=express();

app.use(cors());
app.use(bodyParser.json())

const port= 5000;

connect;
app.use('/coins',coinRouter)
app.use('/exchanges',stockRouter)
// app.use('/',async(req,res)=>{
        
//         await stockSchema.find();
    
// })
app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
})

