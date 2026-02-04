import fs from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFileSync("index.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading page");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});


server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
