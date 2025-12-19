const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User'); // We will create this next

const app = express();
app.use(express.json()); // Allows us to read JSON data sent from frontend
app.use(cors());

// 1. Connect to MongoDB (Localhost for simplicity)
mongoose.connect('mongodb://127.0.0.1:27017/my-auth-db')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// 2. Register Route
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Ideally, you would hash the password here using 'bcrypt' before saving!
        const newUser = await UserModel.create({ name, email, password }); 
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    
    if (user) {
        if (user.password === password) {
            res.json("Success"); // Password matches
        } else {
            res.json("Wrong password");
        }
    } else {
        res.json("No records found");
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});