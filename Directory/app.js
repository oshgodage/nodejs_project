const fs = require('fs')

// fs.mkdir('newDirectory',(err)=>{
//     if(err){
//         return console.error("Error creating directory:", err)
//     }
//     console.log("Directory created successfully")
// })

// fs.mkdirSync('newDirectory2')
// console.log("Directory created successfully")

// Read directory

fs.readdir('./', (err,files)=>{
    if(err){
        return console.error("Error reading directory:", err)
    }
    console.log(files)
})