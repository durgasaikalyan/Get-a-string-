const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express JS");
});

module.exports = app;
