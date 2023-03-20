const fs = require('fs')
const aboutInfo = JSON.parse(fs.readFileSync('./data/about.json', 'utf-8'));

const about = (req, res) => {
    res.render('about', {title: 'About Travlr', aboutInfo})
};

module.exports = {
    about
};