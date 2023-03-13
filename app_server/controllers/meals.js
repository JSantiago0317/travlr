const fs = require('fs');

const foods = JSON.parse(fs.readFileSync("./data/meals.json", "utf-8"));

const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Meals', foods})
};

module.exports = {
    meals
};