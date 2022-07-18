const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const book = require('./routers/book');

const app = express();
app.use(express.json());
dotenv.config();

const mongoDBURI = process.env.MONGODB_URI;
const port = 8000;

mongoose.connect(mongoDBURI).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

app.use('/book', book);