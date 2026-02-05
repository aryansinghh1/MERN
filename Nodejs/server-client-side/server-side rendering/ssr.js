const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let html = fs.readFileSync("../temp2/home.html", "utf-8");

    // SERVER-SIDE SCRIPT EXECUTION
    html = html.replace("{{username}}", "Welcome Aayan");
    html = html.replace("{{technology}}", "Learning Node.js Backend");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
});

server.listen(8080,()=>{
  console.log("server is running on port 8080");
});


//server side rendeing means the server generate the full html (with data)
// and then send it to the browser

//how ssr works step by step
//-> browser request a page
//-> server fetch the data
//-> server generates the full html
//-> browser recieves ready to view page
//->
