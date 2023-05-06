const mongoose = require('mongoose')
// const validator= require('validator')

const sSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    citations:{
        all:
        {
         type:Number,
         required:true,   
        },
        Since2018:
        {
         type:Number,
         required:true,   
        }
    },
    hindex:{
       all:
        {
         type:Number,
         required:true,   
        },
        Since2018:
        {
         type:Number,
         required:true,   
        }
    },
    i10index:{
         all:
        {
         type:Number,
         required:true,   
        },
        Since2018:
        {
         type:Number,
         required:true,   
        }
    }
})
// var Cit={}
 const S=mongoose.model('S',sSchema)
 module.exports=S


 
// exports.Cit=Cit