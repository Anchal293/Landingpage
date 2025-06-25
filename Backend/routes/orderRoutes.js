const express = require('express');
const router = express.Router();
const { placeOrder, getAllOrders } = require('../controllers/orderController');

router.post('/', placeOrder);     // POST /api/orders
router.get('/', getAllOrders);    // GET /api/orders

module.exports = router;
