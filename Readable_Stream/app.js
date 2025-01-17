const readline = require('readline')
const fs=require('fs')
const readableStream = fs.createReadStream('example.txt')
const rl = readline.createInterface({input: readableStream})

rl.on('line', (line)=>{
    console.log(line)
})

rl.on('close',()=>{
    console.log('end of file')
})