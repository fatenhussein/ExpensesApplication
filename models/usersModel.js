const mongoose = require('mongoose');
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'please enter an user name '],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'please enter an email'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [isEmail, 'please enter a valid eamil'],
  },
  password: {
    type: String,
    required: [true, 'please enter an password'],
    minlength: [6, 'minimum  password  length is 6 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
