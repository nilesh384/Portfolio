import dotenv from "dotenv";


dotenv.config();



// server.js or wherever your Express app is
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import main from "./ai.js";
import mongoose from "mongoose";
import Data from "./message.models.js";  

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
try{
  mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
}catch(err){console.log(err)}

app.post("/api/content", async (req, res) => {
  try {
    const {question, userId} = req.body;

    // Save user question to DB
    await Data.create({ userId  ,role: "user", message: question });

    // Get all messages so far
    const messages = await Data.find({userId}).sort({ timestamp: 1 });

    // Get AI response based on full conversation
    const aiResponse = await main(messages);

    // Save AI response to DB
    await Data.create({ userId ,role: "ai", message: aiResponse });

    res.send({ result: aiResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});


app.get("/api/messages", async (req, res) => {
  const userId = req.query.userId;
  const messages = await Data.find({userId}).sort({ timestamp: 1 });
  res.send(messages);
});

app.delete('/api/messages', async (req, res) => {
  const userId = req.query.userId;
  try {
    await Data.deleteMany({userId, role: { $ne: 'system' } });
    res.status(200).json({ message: 'All messages deleted' });
  } catch (error) {
    console.error('Error deleting messages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
