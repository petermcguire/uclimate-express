var express = require('express');
var router = express.Router({mergeParams: true});

const Sensor = require('../models').Sensor

/* GET sensors */
router.get('/', async (req, res, next) => {
  const sensors = await Sensor.findAll({
    where: {
      homeId: req.params.homeID
    }
  });
  res.status(200).json(sensors);
});

/* GET sensor with sensorID */
router.get('/:sensorID', async (req, res, next) => {
  const sensor = await Sensor.findAll({
    where: {
      homeId: req.params.homeID,
      id: req.params.sensorID
    }
  });
  res.status(200).json(sensor);
});

module.exports = router;
