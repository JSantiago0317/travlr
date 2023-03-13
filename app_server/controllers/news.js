const fs = require('fs');

const newsArticles = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));
const sideBar = JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf-8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr News', newsArticles, sideBar})
};

module.exports = {
    news
};