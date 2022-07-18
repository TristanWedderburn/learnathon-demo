const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const book = require('./routers/book');

// Initialize our application.
const app = express();
// Middleware used to parse JSON.
app.use(express.json());

// Initialize our app with the environment variables from our .env file.
dotenv.config();
const mongoDBURI = process.env.MONGODB_URI;

const port = 8000;

// Establish the connection to our DB using the connection string.
mongoose.connect(mongoDBURI).catch(err => console.log(err));

// Listen for connections (i.e. requests) made to the defined port.
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

// Use our controller to handle request made to /book.
app.use('/book', book);