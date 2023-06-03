const orderRouter = require('express').Router();
const orderController = require('../../controllers/order.controller');


/**
 * @Routes "/api/v1/orders"
 */

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', orderController.createOrder);
orderRouter.patch('/:id', orderController.updateOrderStatus);


module.exports = orderRouter