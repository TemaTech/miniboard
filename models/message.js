const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: { type: String, required: true },
  data: { type: String, required: true },
});

module.exports = mongoose.model('Message', MessageSchema, 'messages');
