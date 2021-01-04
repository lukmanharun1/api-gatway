const express = require('express');
const router = express.Router();

const ordersPaymentHandler = require('./handler/order-payment');
router.get('/', ordersPaymentHandler.getOrders);

module.exports = router;