import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename);

const server = http.createServer(async (req, res) => {
  console.log("Requst: ", req.url);

  // Route : Product (SSR + PROXY)
  if (req.url === "/products") {
    // fetch data from external API
    const apiRes = await fetch("https://dummyjson.com/products");
    const data = await apiRes.json();  //fetch happening on the server not on the browser

    //convert data to HTML
    //api gives json , browser needs html and server does the conversation.
    let productHTML = "";
    data.products.forEach((p) => {
      productHTML += `
            <li>
            <h3>${p.title}</h3>
            <img src="${p.thumbnail}" width = "150"/>
            </li>
            `;
    });

    // read template
    const templatePath = path.json(__dirname, "temp.html");
    let html = fs.readFileSync(templatePath, "utf-8");

    //hydrate template
    html = html.replace("{{products}}", productHTML);

    //send final HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  //send css    //css is static browser request it separatly
  if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
    return;
  }

  //send favicon
  if (req.url === "/favicon.ico") {
    const icon = fs.readFileSync(path.join(__dirname, "favicon.png"));
    res.writeHead(200, { "Content-Type": "image/png" });
    req.end(icon);
    return;
  }

  //Default
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})

//fetch happens on the server not in the browser