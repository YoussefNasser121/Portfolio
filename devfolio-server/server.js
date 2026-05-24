// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to local MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// --- Define Schemas ---
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// --- Define Models ---
const Message = mongoose.model("Message", messageSchema);
const Feedback = mongoose.model("Feedback", feedbackSchema);

// --- Routes ---
// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact form submission
app.post("/api/messages", async (req, res) => {
  console.log('POST /api/messages payload:', req.body);
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    console.log('Saved message:', savedMessage);
    res.status(201).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: "Failed to save message", details: err.message });
  }
});

// Debug helper: list messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(20);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to load messages", details: err.message });
  }
});

// Feedback form submission
app.post("/api/feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save feedback", details: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});