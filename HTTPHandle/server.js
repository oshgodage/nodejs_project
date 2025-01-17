const http = require('http')
const { chunk } = require('lodash')

const server = http.createServer((req, res)=>{
    // if(req.method === 'GET' && req.url === '/'){
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end('Welcome to homepage')
    // }else{
    //     res.writeHead(404, {'Content-Type': 'text/plain'});
    //     res.end('Page Not Found')
    // }

    if(req.method === 'POST' && req.url === '/submit'){
        let body=''
        req.on('data', (chunk)=>{
            body+= chunk.toString()
        })
        req.on('end',()=>{
            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify({message: 'Data received', data:body}))
        })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Route not found')
    }
})

const PORT=3000

server.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`)
})