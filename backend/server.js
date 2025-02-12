require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Define Mongoose Schema & Model
const messageSchema = new mongoose.Schema({
  name: String,
  rank: String,
  message: String,
  mail: String,
});
const Message = mongoose.model("Message", messageSchema);

// ✅ API: Get All Messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// ✅ API: Store a New Message
app.post('/api/messages', async (req, res) => {
  const { name, rank, message, mail } = req.body;
  if (!name || !rank || !message || !mail) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const newMessage = new Message({ name, rank, message, mail });
    await newMessage.save();
    res.json({ message: 'Notification sent successfully!', data: newMessage });
  } catch (err) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

// ✅ Use Available Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
