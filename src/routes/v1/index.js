const express = require('express')
const CityController = require('../../controllers/city_controller');

const router = express.Router();

router.post('/city', CityController.create);    // '/city' will be mapped to CityController.create
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);

module.exports = router;