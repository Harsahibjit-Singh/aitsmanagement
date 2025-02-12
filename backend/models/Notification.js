const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  rank: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencing the user
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
