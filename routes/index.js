var express = require('express');
var router = express.Router();
const Message = require('../models/message');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const sortedMessages = await Message.aggregate([
      {
        $sort: { sentAt: 1 }
      }
    ]);

    res.render('index', { title: 'Miniboard', messages: sortedMessages });
  } catch(error) {
    console.error(error);
  }
});

module.exports = router;
