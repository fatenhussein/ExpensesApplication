const express = require('express');
const router = express.Router();
const { createuser, login  , logout} = require('../controllers/authController');

router.route('/signUp').post(createuser);
router.route('/signIn').post(login);
router.route('/logout').post(logout);

module.exports = router;


/**
 * @swagger
 * /users/signIn:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '401':
 *         description: Unauthorized, invalid credentials
 */

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: Log out a user
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '401':
 *         description: Unauthorized, user not logged in
 */


/**
 * @swagger
 * /users/signUp:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - userName
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Invalid request payload
 */
