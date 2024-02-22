const express = require('express');
const router = express.Router();
const { createuser, login  , logout} = require('../controllers/authController');

router.route('/signUp').post(createuser);
router.route('/signIn').post(login);
router.route('/logout').post(logout);

module.exports = router;
