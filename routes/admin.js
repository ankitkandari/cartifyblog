const express = require('express');
const router = express.Router();
const { protectedRoute } = require('../middleware/authenticated');
const { dashboard } = require('../controller/DashboardController');

router.get('/dashboard', protectedRoute, dashboard);

module.exports = router;