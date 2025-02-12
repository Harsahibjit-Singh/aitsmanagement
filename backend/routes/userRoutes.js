const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification'); // Import Notification model
const User = require('../models/User'); // Import User model

// POST /api/notifications - Admin sends a notification
router.post('/notifications', async (req, res) => {
  try {
    const { rank, name, message, email, userId } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newNotification = new Notification({
      rank,
      name,
      message,
      email,
      userId
    });

    // Save notification
    await newNotification.save();
    res.status(201).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/notifications/:userId - User fetches all notifications
router.get('/notifications/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId }).sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
