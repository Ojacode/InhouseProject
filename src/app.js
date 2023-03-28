import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express=require('express')
const hbs=require('hbs')
import path from 'path'
const fs=require('fs')
import { fileURLToPath } from 'url';
var pdf=require('html-pdf')
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
const puppeteer=require("puppeteer")


const app=express()
const port=process.env.PORT||3000


app.use(express.json())

//define paths for expess config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsPAth=path.join(__dirname,'../views') 


//setup handlebars engine and view location.
app.set('view engine','hbs')
app.set('views',viewsPAth)


//setup static directory to serve

// app.use(express.static(path.join(__dirname,'../utils')))

// app.get('',(req,res)=>{
//    res.render('index',{no:"1",ind:"2",cit:"45"})
// })

// app.get('/home',(req,res)=>{
//     var html=fs.readFileSync(path.join(__dirname,'../views/index.hbs'),{no:"1",ind:"2",cit:"45"},'utf8')
    
//     let options={
//         format:'Letter'
//     }
//     pdf.create(html,options).toFile('./invoice4.pdf',function(err,resp){
        
//         if(err) {
//         return console.log(err);
//         }
        
//         console.log(resp)
//     })
//     res.status(200)
// })

// async function getinfo(){
//     try {
//      const response=await fetch('https://scholar.google.com/citations?user=uJJsdiYAAAAJ&hl=en')
//      const body=await response.text()
//      const $=cheerio.load(body)

//      const wrapper=$('.gsc_lcl').children()
//     console.log(wrapper)
//     } catch (e) {
//      console.log(e)
//     }
// }

// getinfo()

// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("8641a7abba52c4202dd19bee6f8c90cb0ea8f767819de63b5508b7f0237337a9");

// const params = {
//   engine: "google_scholar_author",
//   author_id: "uJJsdiYAAAAJ"
// };

// const callback = function(data) {
//   console.log(data["cited_by"]);
// };

// Show result as JSON
// search.json(params, callback);

const url = "https://scholar.google.com/citations?user=uJJsdiYAAAAJ&hl=en&oi=ao";
 
   const  browser = await puppeteer.launch({
        headless: false,
        args: ["--disabled-setuid-sandbox", "--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Agency/97.8.6287.88",
    });  
    
    await page.goto(url, { waitUntil: "domcontentloaded" });

 let name=[]
 name= await page.evaluate(() => {
    return Array.from(document.querySelectorAll("#gsc_prf_w")).map((el) => {
     return {    
      name: el.querySelector("#gsc_prf_in")?.textContent,
      position:el.querySelector(".gsc_prf_il")?.textContent,
      verfiedat: el.querySelector(" #gsc_prf_ivh")?.textContent,
    //   writers: el.querySelector(".N96wpd")?.textContent,
      }
     })
    });
console.log(name)

 let citations=[]
 citations= await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".gsc_rsb")).map((el) => {
     return {    
      citations: el.querySelector("#gsc_prf_in")?.textContent,
      hindex:el.querySelector(".gsc_prf_il")?.textContent,
      i10index: el.querySelector(" #gsc_prf_ivh")?.textContent,
    //   writers: el.querySelector(".N96wpd")?.textContent,
      }
     })
    });
console.log(citations)
app.listen(port,()=>{
    console.log("Server is up on port "+port)
})
