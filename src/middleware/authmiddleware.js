const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  //check if the token exists

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        //ask  them to login
        res.status(400).json({
          status: 'fail',
          message: 'please login ',
        });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    //ask them to login

    //redirect them to the login view but we dont have one cuse yet 

    res.status(400).json({
      status: 'fail',
      message: 'please login ',
    });
  }
};

module.exports = { requireAuth };
