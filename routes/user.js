const express = require('express');
const router = express.Router();
const { protectedRoute } = require('../middleware/authenticated');
const { adsDashboard } = require('../controller/UserController');

router.get('/ads-dashboard', protectedRoute, adsDashboard);

module.exports = router;