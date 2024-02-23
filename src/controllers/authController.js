const User = require('../models/usersModel');

const jwt = require('jsonwebtoken');

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

//create jwt
const maxAge = 2 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

//Create user:
exports.createuser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);

    const token = createToken(newuser._id);

    // to send the token to the browser throu the cookie
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({
      status: 'success',
      token,
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
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    // to send the token to the browser throu the cookie
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({
      status: 'success',
      token,
      id: user._id,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};


//logout
exports.logout = async (req, res) => {
  //remove the cookie from the browser so the user is logged out
  res.cookie('jwt', '' , {maxAge:1});
};



