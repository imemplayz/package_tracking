const express = require("express");
const cors = require("cors");

const app = express();

const User = require("../models/User");

app.use(cors());

//display all users
const displayAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//display a single user
const displayUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, date } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      date: date,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update a user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password, date } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password, date: new Date(date) },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  displayUser,
  deleteUser,
  createUser,
  updateUser,
  displayAllUsers,
};
