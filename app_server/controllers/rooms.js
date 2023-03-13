const fs = require('fs');

const stay = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Rooms', stay})
};

module.exports = {
    rooms
};