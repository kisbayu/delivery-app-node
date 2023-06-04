const {order} = require('../models');
const {priceCalculation} = require('../utils/priceCalculation');

class OrderController {
    static async getAllOrders(req, res, next) {
        try {
            const orders = await order.findAll();
            res.status(200).json({
                message: "Success get all orders",
                status: "Success",
                data: orders
            })
        } catch (error) {
            console.log('=============GET-ORDER==================');
            console.log(error);
            console.log('=============GET-ORDER==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

    static async getOrderByID(req, res, next) {
        try {
            const {id} = req.params;
            const orderData = await order.findByPk(id);
            if(!orderData){
                res.status(404).json({
                    message: "Order not found",
                    status: "Error"
                })
            }
            res.status(200).json({
                message: "Success get order by ID",
                status: "Success",
                data: orderData
            })
        } catch (error) {
            console.log('=============GET-ORDER-BY-ID==================');
            console.log(error);
            console.log('=============GET-ORDER-BY-ID==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

    static async createOrder(req, res, next) {
        try {
            const randomInt = Math.floor(Math.random() * 9);
            const {userID, userName, restoID, restoName, paymentMethod, deliveryType, note} = req.body;
            if(!userName || !restoName || !paymentMethod || !deliveryType){
                res.status(400).json({
                    message: "Please fill all required fields",
                    status: "Error"
                })
            }
            const newOrder = await order.create({
                userID: userID,
                userName: userName,
                restoID: restoID,
                restoName: restoName,
                distance: randomInt,
                paymentMethod: paymentMethod,
                deliveryType: deliveryType,
                price: priceCalculation(randomInt, deliveryType),
                note: note,
                status: "On Going"
            })
            res.status(201).json({
                message: "Success create new order",
                status: "Success",
                data: newOrder
            })
        } catch (error) {
            console.log('=============CREATE-ORDER==================');
            console.log(error);
            console.log('=============CREATE-ORDER==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }

    static async updateOrderStatus(req, res, next) {
        try {
            const {id} = req.params;
            const currentOrder = await order.findByPk(id);
            if(!currentOrder){
                res.status(404).json({
                    message: "Order not found",
                    status: "Error"
                })
            }

            const updatedOrder = await order.update({
                status: req.body.status
            }, { where: {id: id}})
            res.status(200).json({
                message: "The Order Has Been Updated",
                status: "Success",
                data: updatedOrder
            })
        } catch (error) {
            console.log('=============UPDATE-ORDER==================');
            console.log(error);
            console.log('=============UPDATE-ORDER==================');
            res.status(500).json({
                message: error.message,
                status: "Error"
            })
        }
    }


}

module.exports = OrderController;