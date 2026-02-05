// to kill port if its in use
// netstat -ano | findstr : 3000

//methods

import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("fetching data");
  } else if (req.method === "POST") {
    res.end("Sending data");
  } else if (req.method === "PUT") {
    res.end("updating data");
  } else if (req.method === "DELETE") {
    res.end("Deleting data");
  }
});

server.listen(3000,()=>{
    console.log("Server running");
})
