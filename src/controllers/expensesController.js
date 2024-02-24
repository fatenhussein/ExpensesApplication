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
  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    //If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
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

//Delete expense:
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
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

// get all the expeneses list by specific date
exports.getExpensesListByDate = async (req, res) => {
  const { year, month, day } = req.params;
  const startDate = new Date(year, month - 1, day);
  const endDate = new Date(year, month - 1, parseInt(day) + 1); // Convert day to number

  try {
    const expenses = await Expense.find({
      date: { $gte: startDate, $lt: endDate },
    });

    if (expenses.length === 0) {
      return res.status(200).json({
        status: 'success',
        message: 'No expenses found for the specified date.',
        result: 0,
        data: {
          expenses: [],
        },
      });
    }

    res.status(200).json({
      status: 'success',
      result: expenses.length,
      data: {
        expenses,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
