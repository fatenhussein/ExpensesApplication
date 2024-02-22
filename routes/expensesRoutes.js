const express = require('express');

const {
  getAlleExpenses,
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
} = require('../controllers/expensesController');

const router = express.Router();
router.route('/').post(createExpense).get(getAlleExpenses);
router.route('/:id').get(getExpense).patch(updateExpense).delete(deleteExpense);

module.exports = router;
