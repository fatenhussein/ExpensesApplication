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
