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
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            userName: {
              type: 'string',
              description: 'The username.',
            },
            email: {
              type: 'string',
              description: 'The email address.',
            },
            password: {
              type: 'string',
              description: "The user's password.",
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date and time when the user was created.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date and time when the user was last updated.',
            },
            expenses: {
              type: 'array',
              items: {
                type: 'string',
                description: 'The ID of an expense associated with the user.',
              },
              description: 'An array of expense IDs associated with the user.',
            },
          },
          required: ['userName', 'email', 'password'],
        },
      },
    },
    
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
