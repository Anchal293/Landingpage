const Order = require('../models/orderModels');

const placeOrder = async (req, res) => {
  try {
    const { name, phone, address, food } = req.body;

    const newOrder = new Order({ name, phone, address, food });
    await newOrder.save();

    res.status(201).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to place order", error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

module.exports = { placeOrder, getAllOrders };
