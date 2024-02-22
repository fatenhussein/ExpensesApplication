const Expense = require('../models/expensesModel');

// get all expenses
exports.getAlleExpenses = async (req, res) => {
  try {
    const expense = await Expense.find();

    res.status(200).json({
      status: 'success',
      result: expense.length,
      data: {
        expense,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Create expense:
exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        expense: newExpense,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Get expense:
exports.getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      expense,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Update expense:
exports.updateExpense = async (req, res) => {

};

//Delete expense:
exports.deleteExpense = async (req, res) => {
 
};
