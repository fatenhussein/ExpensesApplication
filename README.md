
# ExpenseApp Installation Guide

This guide will walk you through the installation process for ExpenseApp.

## Prerequisites
- Node.js and npm installed on your system
- Docker installed (optional, for Dockerized deployment)

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd ExpenseApp

1. Install Node modules
npm install


2. Configure Environment Variables
Create a new file named config.env in the root directory.
Copy the content from config.env.example into config.env.
Modify the values in config.env as per your configuration.
dotenv

# Environment variables for ExpensesApp
# Application name
APP_Name=ExpensesApp
# Database connection string (MongoDB)
DATA_BASE=mongodb+srv://username:password@host/database
# Database password
PASSWORD=your_database_password_here
# Application port
PORT=9000
# JWT Secret key for authentication
JWT_SECRET=your_jwt_secret_key_here
Start the Application
npm start

# Dockerized Deployment 
If you prefer Dockerized deployment, follow these additional steps:

1. Build Docker image

docker build -t expenseapp .

2. Run Docker Compose

docker-compose up