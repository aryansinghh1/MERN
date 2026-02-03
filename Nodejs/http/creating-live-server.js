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
// const server = http.createServer((req, res)=>{
//     const responseObj = {
//         success: true,
//         message: "User created",
//         name:"aryan",
//         age: 20,
//     };

//     res.writeHead(200, {
//         "Content-Type": "application/json",
//     });
//     res.end(
//         JSON.stringify(responseObj)
//     );
// });

// server.listen(3000, ()=>{
//     console.log("🚀 Server running at http://localhost:3000");
// });



const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node Server</title>
      </head>
      <body>
        <h1>User Created</h1>
        <p>Name: Aryan</p>
        <p>Age: 20</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});