const coinSchema = require("../models/coinSchema");
const { MongoClient } = require('mongodb');


// export const =()=>{
    const apiKey='29e51052-ce6c-40b5-8fca-ff898cd84d9c';
    const url='https://api.livecoinwatch.com';
// }


// export const getCoins=async(req,res)=>{
//     await fetch(new Request(`${url}/coins/list`), {
//         method: "POST",
//         headers: new Headers({
//           "content-type": "application/json",
//           "x-api-key": apiKey,
//         }),
//         body: JSON.stringify({
//           currency: "USD",
//           sort: "rank",
//           order: "ascending",
//           offset: 0,
//           limit: 20,
//           meta: false,
//         }),
//       }).then((res)=>res.json()).then(async(data)=>{
//         // await coinSchema.find()
//        res.send(data)
//         try{

// const uri = "mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
    
//     // Replace 'databaseName' and 'collectionName' with your database and collection names
//     const database = client.db('fomo-factory');
//     const collection = database.collection('coinschemas');

//     const deleteResult = await collection.deleteMany({});
//     console.log(`${deleteResult.deletedCount} documents were deleted`);
    
//     // Insert the new array of data
//     const insertResult = await collection.insertMany(data);
//     console.log(`${insertResult.insertedCount} documents were inserted`);

//   } 
//   finally {
    
//         await client.close();

//   }
// }

// run().catch(console.dir);

     
//         }
//         catch(err){
//           console.log(err);
//         }
         
//       })
// }
// module.exports=getCoins;

 const getSingleCoin=async(req,res)=>{
  const code = req.params.code.toUpperCase();
  console.log(code);
  await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": apiKey,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: code,
      meta: true,
    }),
  }).then((res)=>res.json()).then(async(data)=>{
      // await coinSchema.find()
     res.send(data)
//       try{

// const uri = "mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/";

// const client = new MongoClient(uri);

// async function run() {
// try {
//   await client.connect();
  
//   // Replace 'databaseName' and 'collectionName' with your database and collection names
//   const database = client.db('fomo-factory');
//   const collection = database.collection('coinschemas');

//   const deleteResult = await collection.deleteMany({});
//   console.log(`${deleteResult.deletedCount} documents were deleted`);
  
//   // Insert the new array of data
//   const insertResult = await collection.insertMany(data);
//   console.log(`${insertResult.insertedCount} documents were inserted`);

// } 
// finally {
  
//       await client.close();

// }
// }

// run().catch(console.dir);

   
//       }
//       catch(err){
//         console.log(err);
//       }
       
    })
}
module.exports=getSingleCoin;
