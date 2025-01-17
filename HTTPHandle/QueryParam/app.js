
const http = require('http')
const url = require('url')

const server=http.createServer((req, res)=>{
    if(req.method==='GET' && req.url.startsWith('/search')){
        const queryObject = url.parse(req.url, true).query

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify({message:'Query recieved',queryObject}))
    }
    else{
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("Not found")
    }
})
PORT=3001
server.listen(3001, ()=>{
    console.log(`Server is running Port${PORT}`)
})