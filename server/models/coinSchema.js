const express=require('express');
const mongoose=require('mongoose');

const coinSchema=new mongoose.Schema({
    cap:{
        type:Number,
        required:true,
    },
    code:{
        type:Number,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
    },
    volume:{
        type:Number,
        required:true,
    },
    
    delta:{
        hour:{
            type:Number,
            required:true,
        },
        day:{
            type:Number,
            required:true,
        },
        week:{
            type:Number,
            required:true,
        },
        month:{
            type:Number,
            required:true,
        },
        quarter:{
            type:Number,
            required:true,
        },
        year:{
            type:Number,
            required:true,
        },
    }
  
})

module.exports=mongoose.model('coinSchema',coinSchema);

