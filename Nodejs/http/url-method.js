import http from "http";

let users = [
  { id: 1, name: "ankit" },
  { id: 2, name: "aryan" },
];

function getRequestBody(req) {
  return new Promise((resolve) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(JSON.parse(body));
    });
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET
  if (req.url === "/users" && req.method === "GET") {
    res.end(JSON.stringify(users));
  }

  // POST
  else if (req.url === "/users" && req.method === "POST") {
    const data = await getRequestBody(req);

    const newUser = {
      id: users.length + 1,
      name: data.name,
    };

    users.push(newUser);
    res.statusCode = 201;
    res.end(JSON.stringify(newUser));
  }

  // PUT
  else if (req.url === "/users" && req.method === "PUT") {
    const data = await getRequestBody(req);
    const user = users.find((u) => u.id === data.id);

    if (!user) {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "user not found" }));
      return;
    }

    user.name = data.name;
    res.end(JSON.stringify(user));
  }

  // PATCH  ✅ (NEW)
  else if (req.url === "/users" && req.method === "PATCH") {
    const data = await getRequestBody(req);
    const user = users.find((u) => u.id === data.id);

    if (!user) {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "user not found" }));
      return;
    }

    if (data.name !== undefined) {
      user.name = data.name;
    }

    res.end(JSON.stringify(user));
  }

  // DELETE
  else if (req.url === "/users" && req.method === "DELETE") {
    const data = await getRequestBody(req);
    users = users.filter((u) => u.id !== data.id);
    res.end(JSON.stringify({ message: "user delete" }));
  }

  // 404
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});


