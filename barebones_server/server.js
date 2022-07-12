const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page === "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page === "/about") {
    fs.readFile("about.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page === "/style.css") {
    fs.readFile("style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page === "/api") {
    if ("card" in params) {
      if (params["card"] === "sanctumseeker") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "Sanctum Seeker",
          type: "Vampire Knight",
          flavorText:
            "The Sanctum Seekers were the first of the knightly orders to cross the sea and are still the most zealous.",
        };
        res.end(JSON.stringify(objToJson));
      } else if (params["card"] !== "sanctumseeker") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          type: "unknown",
          flavorText: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page === "/script.js") {
    fs.readFile("script.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
