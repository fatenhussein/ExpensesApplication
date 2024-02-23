const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authmiddleware');

const setupSwagger = require('./utils/swagger');
const authRoutes = require('./routes/authRoutes');
const categoriesRouter = require('./routes/categryRoutes');
const expensesRouter = require('./routes/expensesRoutes');


// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/users', authRoutes);
app.use('/categories', categoriesRouter);
app.use('/expenses', expensesRouter);



// Set up Swagger documentation
setupSwagger(app);

module.exports = app;
