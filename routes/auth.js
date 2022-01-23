const express = require('express');
const router = express.Router();
const { register, registerUser, login } = require('../controller/AuthController');

router.get('/register', register);
router.post('/register', registerUser);
router.get('/login', login);

module.exports = router;