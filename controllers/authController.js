const User = require('../models/usersModel');

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
      message: err.message,
    });
  }
};

//login user:
exports.login = async (req, res) => ({});

//logout
exports.logout = async (req, res) => ({});
