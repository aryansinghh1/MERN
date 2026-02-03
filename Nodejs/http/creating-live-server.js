import http from "http";


// create server register a request listener 
// this callback runs every incoming request
// req -> request object
//res -> response object
//
// const server = http.createServer((req, res)=>{
//     res.end("Hello World2");
// })

// server.listen(3000,()=>{
//     console.log("🚀 Server running at http://localhost:3000");
// });

 
//
const server = http.createServer((req, res)=>{
    const responseObj = {
        success: true,
        message: "User created",
        name:"aryan",
        age: 20,
    };

    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(
        JSON.stringify(responseObj)
    );
});

server.listen(3000, ()=>{
    console.log("🚀 Server running at http://localhost:3000");
});