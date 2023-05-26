const UserController = require('../../controllers/user.controller');
const userRouter = require('express').Router();

/**
 * @Routes "/api/v1/users"
 */

userRouter.post("/", UserController.registerUser);

module.exports = userRouter;