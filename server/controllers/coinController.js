const coinSchema = require("../models/coinSchema");
const { MongoClient } = require('mongodb');


// export const =()=>{
    const apiKey='7ac591be-9775-46ac-b65c-281ec4d66890';
    const url='https://api.livecoinwatch.com';
// }




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

    })
}
module.exports=getSingleCoin;
