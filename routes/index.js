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

module.exports = router;
