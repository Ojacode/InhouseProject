// const { fileURLToPath } =require('url');

// // import { createRequire } from "module";
// // const require = createRequire(import.meta.url);


const express=require('express')
const router =new express.Router()


// const fs=require('fs')
// var pdf=require('html-pdf')
// const path=require('path')
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);
// console.log(__filename)
// console.log(__dirname)
// console.log(path.join(__dirname, 'index.html'))


// // router.use(express.static(path.join(__dirname, '../router')))


// // router.get('/home',(req,res)=>{
// //     var html=fs.readFileSync('index.html','utf8')
// //     // var html="<h1>hello</h1>"
// //     let options={
// //         format:'Letter'
// //     }
// //     pdf.create(html,options).toFile('./invoice4.pdf',function(err,resp){
        
// //         if(err) {
// //         return console.log(err);
// //         }
        
// //         console.log(resp)
// //     })
// //     res.status(200)
// // })

module.exports=router