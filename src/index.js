const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 3000;

// viewed at http://localhost:3000
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// this will crash the server
app.get("/read", function(req, res) {
  fs.createReadStream("not-found-txt");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
