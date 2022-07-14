var express = require('express');
var router = express.Router();
var sensorsRouter = require('./sensors');

const Home = require('../models').Home

/* GET homes */
router.get('/', async (req, res, next) => {
  const homes = await Home.findAll();
  res.status(200).json(homes);
});

/* GET home with homeID */
router.get('/:homeID', function(req, res, next) {
  res.send('');
});

router.use('/:homeID/sensors', sensorsRouter);

module.exports = router;
