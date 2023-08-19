const DB =require('../models/citations.js')
const S=require('../models/statistics.js')
const express=require('express')
const hbs=require('hbs')
const  path = require('path')
const fs=require('fs')
const { fileURLToPath }= require('url');
const pdf=require('pdf-creator-node')
const generate=require('./pdf.js')
const compute=require('./excel.js')
const logger = require('morgan');
const cors = require('cors');
const cit =require('./citations.js')


const app=express()
const port=process.env.PORT||3000

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const  pdfRouter = require('../router/pdf.js')
const { Console } =require("console");

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(pdfRouter)


//define paths for expess config
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const viewsPAth=path.join(__dirname,'../views') //
const bodyParser = require('body-parser');

//setup handlebars engine and view location.
app.set('view engine','hbs')
app.set('views',viewsPAth)


// app.post("/post", (req, res) => {
// console.log("Connected to React");
// res.redirect("/");
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


//setup static directory to serve

app.use(express.static(path.join(__dirname,'../public')))

 
app.use(bodyParser.urlencoded({ extended: false }));


console.log(path.join(__dirname,'../views/pdf.hbs'))

// app.post("/post", (req, res) => {
// console.log("Connected to React");
// res.redirect("/");
// });

app.get('',(req,res)=>{
  res.render('home')
})

app.get('/google',(req,res)=>{
   res.render('google')
})

app.post('/submit',(req,res)=>{
  
  const name=req.body.name
  cit.setup(name)
  res.render('search')

})

app.post('/search',async(req,res)=>{
  
  // alert("hello")
  // console.log(req.body)
  const input=req.body.input;
  const key=req.body.checkbox;
  var object={}
  var result={}
  var database={}
  if(key=='AuthorAll')
  { 
    compute()
  }
  else if(key=='Author')
  {
    object={author:input}
    result= await S.findOne(object).lean()
    database=await DB.find(object).lean()
    
    generate(key,result)
  }
  else if(key=='Hindex')
  {
    object={'hindex.all':input}
    result= await S.findOne(object).lean()
    database=await DB.find({author:result.author}).lean()
    console.log(object,result,database)
    generate(key,result)

  }
  else
  {
   object={'i10index.all':input}
   result= await S.findOne(object).lean()
   database=await DB.find({author:result.author}).lean()
   console.log(database)
   generate(key,result)

  }

  // console.log(result,database)
  res.send({result,database})  
 
  // const query= await S.find(object)
  // const query= await S.find({author:'Kalyani C Waghmare'})
  // console.log(query)
})

app.listen(port,()=>{
    console.log("Server is up on port "+port)
})
