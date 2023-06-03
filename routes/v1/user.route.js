const UserController = require('../../controllers/user.controller');
const userRouter = require('express').Router();

/**
 * @Routes "/api/v1/users"
 */

userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);
userRouter.put("/:id", UserController.updateUser);


module.exports = userRouter;