const mongoose=require('mongoose');

 const connectDB=mongoose.connect('mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/fomo-factory').then(()=>{
    console.log('DB connected');
})

module.exports=connectDB;