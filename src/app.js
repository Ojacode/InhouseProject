// const DB =require('../models/citations.js')
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const S=require('../models/statistics.js')
const express=require('express')
const hbs=require('hbs')
const  path = require('path')
const fs=require('fs')
const { fileURLToPath }= require('url');
const pdf=require('pdf-creator-node')
// import Cit from '../models/citations.js'

const cit =require('./citations.js')



const app=express()
const port=process.env.PORT||3000

const  pdfRouter = require('../router/pdf.js')
const { Console } =require("console");

app.use(express.json())
app.use(pdfRouter)


//define paths for expess config
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const viewsPAth=path.join(__dirname,'../views') 
const bodyParser = require('body-parser');

//setup handlebars engine and view location.
app.set('view engine','hbs')
app.set('views',viewsPAth)


//setup static directory to serve

app.use(express.static(path.join(__dirname,'../public')))

 
app.use(bodyParser.urlencoded({ extended: false }));


console.log(path.join(__dirname,'../views/pdf.hbs'))

app.get('/generate',(req,res)=>{
    var html=fs.readFileSync(path.join(__dirname,'../views/pdf.hbs'),'utf8')
    
    let options={
        format:'Letter'
    }
    let data={
      no:1,
      ind:1,
      cit:1
    }

    var document={
      html:html,
      data:data,
      path:"./invoice5.pdf",
      type: "",
    };
    pdf.create(document,options).then((res)=>{
      console.log(res);
    }).catch((error)=>{console.error(error)});
        
    res.status(200)
})


app.get('',(req,res)=>{
  res.render('home')
})

app.get('/google',(req,res)=>{
   res.render('google')
})

app.get('/scopus',(req,res)=>{
   res.render('scopus')
})

app.post('/submit',(req,res)=>{
  
  const name=req.body.name
  cit.setup(name)

})

// const nameinput="Sonkamble Balwant"
// const s=S.findOne({name:nameinput})
// console.log(s)
// app.get('/citations/:name',async(req,res)=>{
    
//     const name=req.params.name
//     try {
//     const s= await S.findOne({name:req.params.name})
//      if(!s){
//             return res.status(404).send()
//         }
//     res.send(s)
//     } catch (e) {
//       res.status(500).send()  
//     }

// })

app.post('/generate',(req,res)=>{
  alert("hi")
})

// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("8641a7abba52c4202dd19bee6f8c90cb0ea8f767819de63b5508b7f0237337a9");

// const params = {
//   engine: "google_scholar_author",
//   author_id: "uJJsdiYAAAAJ"
// };

// const callback = function(data) {
//   console.log(data["cited_by"]);
// };

// // Show result as JSON
// search.json(params, callback);

// const Captcha = require("2captcha")
// // A new 'solver' instance with our API key
// const solver = new Captcha.Solver("<Your 2captcha api key>")
// /* Example ReCaptcha Website */
// /*****
// @params
// - dataSiteKey
// - website url where captcha is placed
// *****/
// solver.recaptcha("6Ld2sf4SAAAAAKSgzs0Q13IZhY02Pyo31S2jgOB5", "https://patrickhlauke.github.io/recaptcha/")
// .then((res) => {
// console.log(res)
// })


app.listen(port,()=>{
    console.log("Server is up on port "+port)
})
