// import fs from "fs";
// import http from "http";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = http.createServer(async (req, res) => {
//   console.log("Requst: ", req.url);

//   // Route : Product (SSR + PROXY)
//   if (req.url === "/products") {
//     // fetch data from external API
//     const apiRes = await fetch("https://dummyjson.com/products");
//     const data = await apiRes.json();  //fetch happening on the server not on the browser

//     //convert data to HTML
//     //api gives json , browser needs html and server does the conversation.
//     let productHTML = "";
//     data.products.forEach((p) => {
//       productHTML += `
//             <li>
//             <h3>${p.title}</h3>
//             <img src="${p.thumbnail}" width = "150"/>
//             </li>
//             `;
//     });

//     // read template
//     const templatePath = path.join(__dirname, "temp.html");
//     let html = fs.readFileSync(templatePath, "utf-8");

//     //hydrate template
//     html = html.replace("{{products}}", productHTML);

//     //send final HTML
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(html);
//     return;
//   }

//   //send css    //css is static browser request it separatly
//   if (req.url === "/style.css") {
//     res.writeHead(200, { "Content-Type": "text/css" });
//     res.end(css);
//     return;
//   }

//   //send favicon
//   if (req.url === "/favicon.ico") {
//     const icon = fs.readFileSync(path.join(__dirname, "favicon.png"));
//     res.writeHead(200, { "Content-Type": "image/png" });
//     res.end(icon);
//     return;
//   }

//   //Default
//   res.writeHead(404);
//   res.end("Not Found");
// });

// server.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000");
// })

//fetch happens on the server not in the browser



import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  console.log("Request:", req.url);

  // PRODUCTS ROUTE (SSR)
  if (req.url === "/products") {
    try {
      const apiRes = await fetch("https://dummyjson.com/products");
      const data = await apiRes.json();

      let productHTML = "";
      data.products.forEach((p) => {
        productHTML += `
          <li>
            <h3>${p.title}</h3>
            <img src="${p.thumbnail}" width="150" />
          </li>
        `;
      });

      const templatePath = path.join(__dirname, "temp.html");
      let html = fs.readFileSync(templatePath, "utf-8");

      html = html.replace("{{products}}", productHTML);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
      return;
    } catch (err) {
      res.writeHead(500);
      res.end("Server Error");
      return;
    }
  }

  // CSS ROUTE
  if (req.url === "/style.css") {
    const cssPath = path.join(__dirname, "style.css");
    const css = fs.readFileSync(cssPath, "utf-8");

    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
    return;
  }

  // FAVICON
  if (req.url === "/favicon.ico") {
    const icon = fs.readFileSync(path.join(__dirname, "favicon.png"));
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(icon);
    return;
  }

  // DEFAULT
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
