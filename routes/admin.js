var express = require('express');
var router = express.Router();

/* GET /admin */
router.get('/', function(req, res, next) {
  res.render('notify', { title: 'Send Notification' });
});

module.exports = router;
