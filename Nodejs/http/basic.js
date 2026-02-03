import http from "http";


// create server register a request listener 
// this callback runs every incoming request
// req -> request object
//res -> response object
const server = http.createServer((req, res)=>{
    res.end("Hello World2");
})

server.listen(3000);