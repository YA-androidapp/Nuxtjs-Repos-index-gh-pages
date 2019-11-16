const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("api message");
});

module.exports = {
  path: "/api/",
  handler: app
};
