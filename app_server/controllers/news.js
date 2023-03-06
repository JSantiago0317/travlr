const news = (req, res) => {
    res.render('news', {title: 'Travlr News'})
};

module.exports = {
    news
};