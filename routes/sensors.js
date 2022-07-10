var express = require('express');
var router = express.Router({mergeParams: true});

/* GET sensors */
router.get('/', function(req, res, next) {
  res.send('');
});

/* GET sensor with sensorID */
router.get('/:sensorID', function(req, res, next) {
  res.send('');
});

module.exports = router;
