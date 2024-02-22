const User = require('../models/usersModel');

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { userName: '', email: '', password: '' };

  //duplicate error code
  if (err.code === 11000) {
    errors.email = 'that email is already registered';

    return errors;
  }

  // validation errors

  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};





//Create user:
exports.createuser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: newuser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: handleErrors(err),
    });
  }
};




//login user:
exports.login = async (req, res) => ({});




//logout
exports.logout = async (req, res) => ({});
