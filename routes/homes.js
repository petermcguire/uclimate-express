var express = require('express');
var router = express.Router();
var sensorsRouter = require('./sensors');

/* GET homes */
router.get('/', function(req, res, next) {
  res.status(200).json({});
});

/* GET home with homeID */
router.get('/:homeID', function(req, res, next) {
  res.send('');
});

router.use('/:homeID/sensors', sensorsRouter);

module.exports = router;
