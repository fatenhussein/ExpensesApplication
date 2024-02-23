const express = require('express');

const {
  getAlleExpenses,
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  getExpensesListByDate
} = require('../controllers/expensesController');

const router = express.Router();
router.route('/').post(createExpense).get(getAlleExpenses);
router.route('/:id').get(getExpense).patch(updateExpense).delete(deleteExpense);


// a route for getting expenses by date
router.route('/date/:year/:month/:day').get(getExpensesListByDate);


module.exports = router;



/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: API endpoints for managing expenses
 */

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     responses:
 *       '200':
 *         description: A list of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expense'
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       '201':
 *         description: Expense created successfully
 *       '400':
 *         description: Invalid request payload
 */






/**
 * @swagger
 * /expenses/{id}:
 *   get:
 *     summary: Get an expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expense to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Retrieved expense
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       '404':
 *         description: Expense not found
 *   patch:
 *     summary: Update an expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expense to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       '200':
 *         description: Expense updated successfully
 *       '400':
 *         description: Invalid request payload
 *       '404':
 *         description: Expense not found
 *   delete:
 *     summary: Delete an expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expense to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Expense deleted successfully
 *       '404':
 *         description: Expense not found
 */



/**
 * @swagger
 * /expenses/date/{year}/{month}/{day}:
 *   get:
 *     summary: Get expenses by date
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         description: Year of the date
 *         schema:
 *           type: integer
 *       - in: path
 *         name: month
 *         required: true
 *         description: Month of the date
 *         schema:
 *           type: integer
 *       - in: path
 *         name: day
 *         required: true
 *         description: Day of the date
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A list of expenses for the specified date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expense'
 *       '404':
 *         description: No expenses found for the specified date
 */



