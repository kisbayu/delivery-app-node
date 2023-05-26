const v1 = require("express").Router();
const userRouter = require("./user.route");

v1.get("/", (_, res) => {
  res.send("v1 API is working 🎉");
});

v1.use("/users", userRouter);

module.exports = v1;
