// Delete user by ID
const mongoose = require("mongoose");
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const deleted = await AddUser.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await require("../models/AddUser").find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const AddUser = require("../models/AddUser");

exports.addUser = async (req, res) => {
  try {
    const { fname, lname, dob } = req.body;
    if (!fname || !lname || !dob) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUser = await AddUser.create({ fname, lname, dob });
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
