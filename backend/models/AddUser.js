const mongoose = require("mongoose");

const addUserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dob: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("AddUser", addUserSchema);