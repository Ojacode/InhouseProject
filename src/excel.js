const reader= require('xlsx')
const cit =require('./citations.js')

const compute =function(){
  
  // let filename="UT1";
  // console.log("no",no);
  let data=[]
  // console.log("file",filename)
    const file=reader.readFile('publicfiles/Names.xlsx')
    // console.log(file)
    const sheetNames=file.SheetNames
    // console.log(no)
    // sheetNames.splice(30, 1)
    for(let i=0;i<sheetNames.length;i++)
    {
      const arr= reader.utils.sheet_to_json(file.Sheets[sheetNames[i]])
      arr.forEach((res)=>{
        data.push(res)
      })
    }
    
    for(var i=0;i<data.length;i++)
    {
      console.log(data[i].Name)
      cit.setup(data[i].Name)
    }

    // console.log(data.length)
  
}


module.exports=compute