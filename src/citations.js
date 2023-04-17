const DB =require('../models/citations.js')
require("../db/mongoose")
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import * as cheerio from 'cheerio'
// const validate=require('../public/js/index.js')

let values = {
    title :"hello",
    citeby: "hi",
    year: 2014
   }
// console.log(element)
// const hi=new DB(values)
// hi.save()
const puppeteer=require("puppeteer")
// const db=new DB

 const setup= async function(name1){
  // const DB =require('../models/citations.js')
  
  const add=name1
  function stringHasTheWhiteSpaceOrNot(value){
   return value.indexOf(' ') >= 0;
}
var whiteSpace=stringHasTheWhiteSpaceOrNot(add);
var newname=""
   if(whiteSpace==true){
      newname=add.replace(" ","+")
   } 
   else
   {
    newname=add
   }
  var url = "https://scholar.google.com/scholar?hl=en&q=";
  url=url+newname
 
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

    
    let texts = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName('gs_rt2');
    for (var element of elements)
        {
          const href=element.getElementsByTagName("a")[0].href;
          const text=element.textContent;
          data.push({text,href})
        }
    return data
});
   console.log(texts)
   const gotolink=texts[0].href
   await page.close();

   const page2 = await browser.newPage();
   await page2.setExtraHTTPHeaders({
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Agency/97.8.6287.88",
    });  
    
    await page2.goto(gotolink, { waitUntil: "domcontentloaded" });
    
   
  let name=[]
  name= await page2.evaluate(() => {
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


     
    
    const rawData = await page2.evaluate(() => {
      let data = [];
      // const DB =require('../models/citations.js')
    //   const DB=exp.DB
      let table = document.getElementById('gsc_a_b');

      for (var i = 1; i < table.rows.length; i++) {
        let objCells = table.rows.item(i).cells;

        let values = {
           title :objCells.item(0).innerText,
           citeby: objCells.item(1).innerText,
           year: objCells.item(2).innerText
        }
        //  const db=new DB({values})
        //  db.save()
          // const yes=text.querySelector('.gsc_a_at').textcontent;
          // console.log(yes)
        
        
        data.push(values);
      }

      return data;
    });

    console.log(rawData);



   
     const newData = await page2.evaluate(() => {
      let table = document.getElementById('gsc_rsb_st');

      
        let citations = table.rows.item(1).cells;
        let hindex = table.rows.item(2).cells;
        let i10index = table.rows.item(3).cells;

        let row1 = {
           all: citations.item(1).innerText,
           Since2018: citations.item(2).innerText,
        }
        let row2 = {
           all: hindex.item(1).innerText,
           Since2018: hindex.item(2).innerText,
        }
        let row3 = {
           all: i10index.item(1).innerText,
           Since2018: i10index.item(2).innerText,
        }

       let  data={
          citations:row1,
          hindex:row2,
          i10index:row3
        }
            
        return data;
    });

    console.log(newData);
   
}


// exports.getStats=getStats;
// exports.getNameInfo=getNameInfo;
// exports.getCitations=getCitations;
exports.setup=setup;


    