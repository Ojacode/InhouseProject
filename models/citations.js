const mongoose = require('mongoose')
// const validator= require('validator')

const cSchema=new mongoose.Schema({
   
    title:{
        type:String,
        required:true,
        // trim:true,
    },
    citedby:{
        type:Boolean,
        default:false,
    },
    year:{
        type:String,
        required:true,
        // ref:'User'
    }
})
// var Cit={}
 const DB=mongoose.model('DB',cSchema)
 module.exports=DB


 
// exports.Cit=Cit