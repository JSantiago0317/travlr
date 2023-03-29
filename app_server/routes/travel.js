const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

router.get('/', ctrlTravel.travelList);
// router.get('/travel/travelDetails', ctrlTravel.travelDetails); //FIX ME: I have to figure this out

module.exports = router;