const express = require('express');
const router = express.Router();
const { register, registerUser, login, loginUser, logout } = require('../controller/AuthController');

router.get('/register', register);
router.post('/register', registerUser);
router.get('/login', login);
router.post('/login', loginUser);
router.get('/logout', logout);

module.exports = router;