const UserController = require('../../controllers/user.controller');
const userRouter = require('express').Router();

/**
 * @Routes "/api/v1/users"
 */

userRouter.post("/", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);


module.exports = userRouter;