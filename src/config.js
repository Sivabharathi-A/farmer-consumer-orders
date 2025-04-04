const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login-tut");

// Check DB connection
connect.then(() => {
    console.log("Database connected successfully");
}).catch(() => {
    console.log("Database cannot be connected");
});

// Create a schema
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,  // Ensure userType is always required
        enum: ["Farmer", "Consumer"], // Allow only Farmer or Consumer
        default: "Farmer"  // If not provided, default to Consumer
    }
});

// Create collection
const collection = mongoose.model("users", loginSchema);
module.exports = collection;
