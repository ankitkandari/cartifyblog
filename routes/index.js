var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express JS this fucking is working' });
});
router.get('/fuckluck', function(req, res, next) {
    res.render('index', { title: 'Fuck did it' });
});

module.exports = router;