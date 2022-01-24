const express = require('express');
const router = express.Router();
const { homepage } = require('../controller/FrontController');

router.get('/', homepage);

module.exports = router;