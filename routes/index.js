var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* GET new form. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST new message. */
router.post('/new', function(req, res, next) {
  const messageText = req.body.messageText;
  const nameText = req.body.nameText;    
    
  messages.push({
    text: messageText,
    user: nameText,
    added: new Date()
  })

  res.redirect('/');

});

/* GET message details. */
router.get('/message/:id', function(req, res, next) {
  const message = messages[req.params.id];
  if (message) {
    res.render('message', { message });
  } else {
    res.status(404).send('Message not found');
  }
});


module.exports = router;
