var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  setTimeout(() => {
    throw new Error('something bad happened');
  }, 0);
});

module.exports = router;
