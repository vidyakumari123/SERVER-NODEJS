const http = require("http")

const fs =require ("fs")
const myServer = http.createServer((req,res)=>{
 const log =`${Date.now()}:${req.url}New Req Received\n`
    fs.appendFile('log.txt',log ,(err, data)=>{
        switch (req.url){
            case '/':
                 res.end ("Homepage")
            break
            case '/about':
                 res.end ("I am vidya")
            break
            default:
                res.end("404 Not found")

        }
  res.end("Hello from server")
    })
   
  
})
myServer.listen(8000,()=> console.log("Server Started"))