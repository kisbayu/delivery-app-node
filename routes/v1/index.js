const v1 = require("express").Router();

v1.get("/", (_, res) => {
  res.send("v1 API is working 🎉");
});

module.exports = v1;
