var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express JS this fucking is working' });
});
router.get('/thankgod', function(req, res, next) {
    res.render('index', { title: 'Thankyou god for making me blessed' });
});

module.exports = router;