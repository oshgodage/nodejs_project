const path = require('path')
const os =require('os')
const directory = '/user/locale'
const fileName= 'example.com'

const fullPath = path.join(directory, fileName)

console.log(fullPath)
console.log("Platform", os.platform())
console.log("CPU Architecture", os.arch())
console.log("Total Memory", os.totalmem())
console.log("Free Memory", os.freemem())