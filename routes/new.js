var express = require('express');
var router = express.Router();

/* GET new form. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

module.exports = router;
