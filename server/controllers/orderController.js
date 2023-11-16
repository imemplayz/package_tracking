const express = require("express");
const cors = require("cors");

const app = express();

const Order = require("../models/Order");

app.use(cors());

//display all orders
const displayAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

//display a single order
const displayOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ error: "order not found" });
        }

        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//add an order
const addOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//update assignedTo field only in the order
const updateAssignedTo = async (req, res) => {
    try {
      const orderId = req.params.id;
      const teamId = Object.keys(req.body)[0];
  
      const order = await Order.findByIdAndUpdate(
        orderId,
        { assignedTo: teamId },
        { new: true }
      );
  
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
  
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

//export
module.exports = {
    displayAllOrders,
    displayOrder,
    addOrder,
    updateAssignedTo
};
