var express = require('express');
var router = express.Router();
var mime = require('mime');
var path = require('path');

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

module.exports = router;
