const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request:", req.url);

  if (req.url === "/") {
    console.log("HTML REQUESTED")
    const html = fs.readFileSync("../temp1/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  if (req.url === "/client.js") {
    console.log("JS REQUESTED");
    const js = fs.readFileSync("../temp1/client.js");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
  }
});

server.listen(3000,()=>{
  console.log("server is running on port 3000");
});


//client side renderinig means browser, 
// downlaod minimal html file and then,
// javascript run in browser to fetch data
// and built the UI.


//how CSR works step by step
//->browser request a page from server
//->server sends empty/minimal html + js bundle.
//->browser downloads the js
//->javascripts runs
//->api call happens in browser
//->UI is rendered is dynamically
//