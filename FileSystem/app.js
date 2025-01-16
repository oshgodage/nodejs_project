const fs = require('fs')
// fs.readFile('example.txt','utf8',(err, data)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log(data)
// })

const content = 'Hello, node.js'
fs.writeFile("output.txt", content,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("File written successfully")
})