const {User} = require('../models');
const {hashPassword, verifyPassword} = require('../utils/passwordHandler');
const jwt = require('jsonwebtoken')

class UserController {
    //register controller
    static async registerUser(req, res, next) {
        try {
            const {name, phone, email, password} = req.body;
            
            if(!name){
                res.status(400).json({
                    message: "Name is required",
                    status: "Error"
                 })
            }

            if(!email){
                res.status(400).json({
                    message: "Email is required",
                    status: "Error"
                 })
            }

            if(!password){
                res.status(400).json({
                    message: "Password is required",
                    status: "Error"
                 })
            }

            const newUser = await User.create({
                name: name,
                phone: phone,
                email : email,
                password: await hashPassword(password)
            })

            res.status(201).json({
                message: "User Created SuccessFully",
                status: "Success",
                data: newUser
            });
        } catch (error) {
            console.log('=============REGISTER==================');
            console.log(error);
            console.log('=============REGISTER==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

    //login controller
    static async loginUser(req, res, next) {
        try {
            const {email, password} = req.body
            if(!email){
                res.status(400).json({
                    message: "Incorrect Email or Password",
                    status: "Error"
                 })
            }
            const user = await User.findOne({
                where:{
                    email: email.toLowerCase()
                }
            })
            if(!user){
                res.status(404).json({
                    message: "Incorrect Email or Password",
                    status: "Error"
                 })
            }
            var passwordValidation = await verifyPassword(password, user.password)
            if(!passwordValidation){
                res.status(400).json({
                    message: "Incorrect Email or Password",
                    status: "Error"
                 })
            }
            let token = jwt.sign(
                {
                    user_id: user.uuid,
                    name: user.name
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 86400
                }
            )

            res.status(200).json({
                message: `You are logged in as ${user.name}`,
                status: "Success",
                token: token
            })
        } catch (error) {
            console.log('=============LOGIN==================');
            console.log(error);
            console.log('=============LOGIN==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

    static async updateUser(req, res, next) {
        try {
            const {id} = req.params;
            const oldUser = await User.findByPk(id);
            if(!oldUser){
                res.status(404).json({
                    message: "User not found",
                    status: "Error"
                })
            }

            const updatedUser = await User.update({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                password: await hashPassword(req.body.password)
            }, {where: {id: id}})
            res.status(200).json({
                message: "User Updated SuccessFully",
                status: "Success",
                data: updatedUser
            });
        } catch (error) {
            console.log('=============UPDATE-USER==================');
            console.log(error);
            console.log('=============UPDATE-USER==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

}

module.exports = UserController;