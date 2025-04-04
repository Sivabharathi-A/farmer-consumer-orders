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
        if (userMessage.includes("hello")) {
            botResponse = "Hi there! How can I help you?";
        } else if (userMessage.includes("price")) {
            botResponse = "We offer competitive prices! What product are you looking for?";
        } else if (userMessage.includes("add product")) {
            botResponse = "To add a product, go to the Farmer Dashboard and click on 'Add Product'.";
        } else if (userMessage.includes("services")) {
            botResponse = "We only provide services related to farm product sales and connections.";
        } else {
            botResponse = "I'm not sure about that. Can you ask something else?";
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
