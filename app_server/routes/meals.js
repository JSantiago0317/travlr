const express = require('express');
const router = express.Router();
const ctrlMeals = require('../controllers/meals');

router.get('/', ctrlMeals.meals);

module.exports = router;