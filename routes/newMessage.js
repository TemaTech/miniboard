const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const moment = require('moment');

router.get('/', (req, res) => {
  res.render('newMessage');
});

router.post('/', async (req, res) => {
  const data = `By ${req.body.username}`;

  const messageData = {
    message: req.body.message,
    data: data
  }

  if (messageData.message && messageData.data) {
    try {
      await Message.create(messageData);
      res.redirect('/');
    } catch(error) {
      console.error(error);
    }
  } else {
    res.redirect('/new');
  }
});

module.exports = router;
