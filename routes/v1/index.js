const v1 = require("express").Router();
const userRouter = require("./user.route");
const orderRouter = require("./order.route");

v1.get("/", (_, res) => {
  res.send("v1 API is working 🎉");
});

v1.use("/users", userRouter);
v1.use("/orders", orderRouter);

module.exports = v1;
