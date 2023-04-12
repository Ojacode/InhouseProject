const mongoose=require('mongoose')
// const validator=require('validator')


mongoose.connect("mongodb://127.0.0.1:27017/DataB",{
    useNewURLParser:true,
}).then(console.log("Connected to db"))