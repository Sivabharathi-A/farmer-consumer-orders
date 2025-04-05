import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in JSON parser

// Chatbot API Endpoint
app.post("/api/chatbot", async (req, res) => {
    try {
        const userMessage = req.body.message.toLowerCase(); // Convert to lowercase

        let botResponse;

        // Custom chatbot logic based on keywords
        if (userMessage.includes("hello") || userMessage.includes("hi")) {
            botResponse = "Hi there! 👋 How can I assist you today?";
        } else if (userMessage.includes("price")) {
            botResponse = "We offer competitive prices! 💰 Please specify the product you're interested in.";
        } else if (userMessage.includes("add product")||userMessage.includes("delete product")||userMessage.includes("add my product")||userMessage.includes("delete my product")) {
            botResponse = "To add a product, go to the Farmer Dashboard and click on 'Add Product' and similarly for 'Delete Product' click on delete button below📦.";
        } else if (userMessage.includes("services") || userMessage.includes("what do you offer")) {
            botResponse = "We offer services related to buying and selling farm products, price prediction, and farmer-consumer connection 🌾.";
        } else if (userMessage.includes("how to login") || userMessage.includes("login help")) {
            botResponse = "To login, click on the Login button on the homepage and enter your credentials 🔐.";
        } else if (userMessage.includes("signup") || userMessage.includes("register")) {
            botResponse = "To sign up, click on the Sign Up button and fill out your information 📝.";
        } else if (userMessage.includes("filter") || userMessage.includes("search product")) {
            botResponse = "You can filter products by name, category, price, stock, and producer from the Filter section 🔍.";
        } else if (userMessage.includes("stock") || userMessage.includes("quantity")) {
            botResponse = "Stock refers to the available quantity of a product. You can set or view it in the product details 📊.";
        } else if (userMessage.includes("image upload") || userMessage.includes("add image")) {
            botResponse = "To add an image, use the image upload option while adding or editing a product 🖼️.";
        } else if (userMessage.includes("description") || userMessage.includes("product details")) {
            botResponse = "You can add a product description while uploading a product. It helps buyers know more about it 📄.";
        } else if (userMessage.includes("ai price") || userMessage.includes("predict")) {
            botResponse = "Our AI-based price prediction helps farmers set fair prices. Visit the dashboard to use this feature 🤖.";
        } else if (userMessage.includes("chatbot") || userMessage.includes("help bot")) {
            botResponse = "You're chatting with me! 🤖 I'm here to help with product management, login issues, and more.";
        } else {
            botResponse = "Hmm 🤔 I didn't catch that. Try asking about prices, login, adding products, or services we offer!";
        }
    

        res.json({ reply: botResponse });
    } catch (error) {
        console.error("Error processing chatbot response:", error);
        res.status(500).json({ error: "Failed to process request" });
    }
});

// Start the server
const PORT = process.env.PORT || 5500;

const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`✅ Chatbot server running on port ${port}`);
    }).on("error", (err) => {
        if (err.code === "EADDRINUSE") {
            console.log(`❌ Port ${port} is in use. Trying port ${port + 1}...`);
            startServer(port + 1); // Retry with the next available port
        } else {
            console.error("❌ Server error:", err);
        }
    });
};

// Start server with initial PORT
startServer(PORT);
