const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./models/user');

// Load environment variables
require('dotenv').config();

// Create an instance of Express
const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// Initialize Sequelize with database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error syncing with database:', err);
  });


// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
