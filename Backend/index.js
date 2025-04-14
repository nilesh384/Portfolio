import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import main from "./ai.js";
import mongoose from "mongoose";
import Data from "./message.models.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// 🔗 MongoDB connection
mongoose
  .connect(`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🤖 POST: User sends a message → save + get AI response
app.post("/api/content", async (req, res) => {
  try {
    const { message, userId } = req.body;

    if (!message || !userId) {
      return res.status(400).json({ error: "Message and userId are required" });
    }

    // Save user message
    await Data.create({ userId, role: "user", message });

    // Fetch full chat history
    const messages = await Data.find({ userId }).sort({ timestamp: 1 });

    // Generate AI reply
    const aiResponse = await main(messages);

    // Save AI message
    await Data.create({ userId, role: "ai", message: aiResponse });

    res.status(200).send({ result: aiResponse });
  } catch (err) {
    console.error("❌ Error in POST /api/content:", err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

// 📥 GET: Fetch chat history
app.get("/api/messages", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    const messages = await Data.find({ userId }).sort({ timestamp: 1 });
    res.status(200).send(messages);
  } catch (err) {
    console.error("❌ Error in GET /api/messages:", err);
    res.status(500).send({ error: "Failed to fetch messages" });
  }
});

// 🧹 DELETE: Clear all messages except system
app.delete("/api/messages", async (req, res) => {
  const userId = req.query.userId;
  try {
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    await Data.deleteMany({ userId, role: { $ne: "system" } });
    res.status(200).json({ message: "All messages deleted" });
  } catch (error) {
    console.error("❌ Error in DELETE /api/messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🚀 Server boot
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
