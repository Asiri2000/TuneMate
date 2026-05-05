const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  console.log("Register user request received:", req.body);
  try {
    const { username, email, password } = req.body;

    // check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    console.log("Hashing password...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Password hashed.");

    // create user
    console.log("Creating user...");
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log("User created:", user);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};