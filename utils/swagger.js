const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const options = {
  // Define the Swagger definition
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ExpensesApp API',
      version: '1.0.0',
      description: 'API documentation for ExpensesApp',
    },
    servers: [
      {
        url: 'http://localhost:9000',
        description: 'Development server',
      },
    ],
  },
  // Path to the APIs you want to document
  apis: ['./routes/*.js'], // Path to the API routes
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Set up Swagger UI
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
