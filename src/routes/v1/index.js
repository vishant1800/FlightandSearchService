const express = require('express')
const CityController = require('../../controllers/city_controller');
const FlightController = require('../../controllers/flight_controller');

const router = express.Router();

router.post('/city', CityController.create);    // '/city' will be mapped to CityController.create
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/flights', FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getAll);

module.exports = router;