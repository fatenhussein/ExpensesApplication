const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  // i could use the created at but what if the user want to enter an  old expens 
  date: {
    type: Date,
    required: true,
    
  },
  description: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
