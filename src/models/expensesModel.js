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
    get: function(value) {
      return value.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    }
  },
  description: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
