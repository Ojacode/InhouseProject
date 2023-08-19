
const fs=require('fs')
const  path = require('path')
const pdf=require('pdf-creator-node')
const S=require('../models/statistics.js')
const DB =require('../models/citations.js')

const generate = async function (key,result){
    var html=fs.readFileSync(path.join(__dirname,'../views/pdf.hbs'),'utf8')
    
    let options={
        format:'Letter'
    }

    var document={
      html:html,
      data:{      
        result:result,
        // data2:database
        // length:database.length
      },
      path: key +".pdf",
      type: "",
    };
    pdf.create(document,options).then((res)=>{
      console.log(res);
    }).catch((error)=>{console.error(error)});

}

module.exports=generate