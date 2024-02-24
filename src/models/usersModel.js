const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt
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
    validate: [isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please enter a password'],
    minlength: [6, 'minimum password length is 6 characters'],
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

// This is for hashing the password before it is saved in the db
userSchema.pre('save', async function (next) {
  try {
    // Hash the password with a salt round of 12
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Static method to login the user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  // hash the password the user entered then compare it to hash pass in the db 
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Incorrect password');
  }

  throw Error('Incorrect email');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
