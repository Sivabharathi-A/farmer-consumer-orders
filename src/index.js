const express = require('express');
const path = require("path");  // ✅ Fixed typo
const bcrypt = require("bcrypt");
const collection = require("./config");
const app = express();

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(express.static("public"));

// Routes for login and signup pages
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
    try {
        const { username, password, userType } = req.body;

        // Check if user already exists
        const existingUser = await collection.findOne({ name: username });
        if (existingUser) {
            return res.send("User already exists. Please choose a different username.");
        }

        // Hash the password before storing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Store user in DB
        const newUser = await collection.create({
            name: username,
            password: hashedPassword,
            userType
        });

        console.log(newUser);
        res.render("login", { message: "Signup successful! You can now log in." });
    } catch (error) {
        console.error("Signup Error:", error);
        res.send("Error occurred during signup.");
    }
});
app.get("/home", (req, res) => {
    res.render("home");  // Render home.ejs (Farmer Dashboard)
});

app.get("/consumer-dashboard", (req, res) => {
    res.render("consumer");  // Render consumer.ejs (Consumer Dashboard)
});
app.get('/login', (req, res) => {
    res.render('login'); // or whatever your EJS file is named
});

// Login User
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const check = await collection.findOne({ name: username });
        if (!check) {
            return res.send("Username not found.");
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, check.password);
        if (!isPasswordMatch) {
            return res.send("Wrong password.");
        }

        // Redirect based on user type
        if (check.userType === "Farmer") {
            return res.redirect("/home");  // Redirect to Farmer dashboard
        } else if (check.userType === "Consumer") {
            return res.redirect("/consumer-dashboard");  // Redirect to Consumer dashboard
        } else {
            return res.send("Invalid user type.");
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.send("Error: Something went wrong.");
    }
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

