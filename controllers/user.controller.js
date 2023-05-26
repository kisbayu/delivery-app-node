const {User} = require('../models');
const {hashPassword} = require('../utils/passwordHandler');

class UserController {
    //register
    static async registerUser(req, res, next) {
        try {
            const {name, phone, email, password} = req.body;
            
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

}

module.exports = UserController;