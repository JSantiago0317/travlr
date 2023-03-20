const fs = require('fs')

const about = (req, res) => {
    res.render('about', {title: 'About Travlr'})
};

module.exports = {
    about
};