const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId, //ican use the populate then if i want to retireve users with there expenses 
      ref: 'Expense',
    },
  ],
});

//this is for hashing the password before it saved in the db
userSchema.pre('save', async function (next) {
  // Hash the password with cost of 12
  let salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// static method to login the user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      return user;
    }

    throw Error('incorrect password');
  }

  throw Error('incorrect email');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
