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
            
          },
          required: ['userName', 'email', 'password'],
        },

        Category: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the category.',
            },
            description: {
              type: 'string',
              description: 'Description of the category.',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date and time when the category was created.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description:
                'The date and time when the category was last updated.',
            },
          },
          required: ['name'],
        },

        Expense: {
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              description: 'The ID of the user who created the expense.',
            },
            categoryId: {
              type: 'string',
              description:
                'The ID of the category to which the expense belongs.',
            },
            amount: {
              type: 'number',
              description: 'The amount of the expense.',
            },
            date: {
              type: 'string',
              description: 'The date of the expense.',
            },
            description: {
              type: 'string',
              description: 'Optional description of the expense.',
            },
          },
          required: ['userId', 'categoryId', 'amount', 'date'],
        },
      },
    },
  },
  // Path to the APIs you want to document
  apis: ['./src/routes/*.js'], // Path to the API routes
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Set up Swagger UI
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};


//the url for Swagger docs
//http://localhost:9000/api-docs/  


module.exports = setupSwagger;
