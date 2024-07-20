const { MongoClient } = require('mongodb');
const coinSchema=require('../models/coinSchema');

const apiKey='7ac591be-9775-46ac-b65c-281ec4d66890';
const url='https://api.livecoinwatch.com';
// }


const getCoins=async(req,res)=>{
    await fetch(new Request(`${url}/coins/list`), {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": apiKey,
        }),
        body: JSON.stringify({
          currency: "USD",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 20,
          meta: false,
        }),
      }).then((res)=>res.json()).then(async(data)=>{
        // await coinSchema.find()
       res.send(data)
        try{

const uri = "mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // Replace 'databaseName' and 'collectionName' with your database and collection names
    const database = client.db('fomo-factory');
    const collection = database.collection('coinschemas');

    const deleteResult = await collection.deleteMany({});
    console.log(`${deleteResult.deletedCount} documents were deleted`);

    // Insert the new array of data
    const insertResult = await collection.insertMany(data);
    console.log(`${insertResult.insertedCount} documents were inserted`);

  } 
  finally {

        await client.close();

  }
}

run().catch(console.dir);

 
        }
        catch(err){
          console.log(err);
        }
     
      })
}
module.exports=getCoins;
