const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  fs.readFile(path.join(__dirname, "/data/students.json"), (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "Application/json" });
    console.log(data);
    res.end(data);
  });
});
server.listen(5000, () => console.log("Listening port 5000"));
