const mongoose = require("mongoose");
const Book = require('../models/book');

module.exports = {
    create: async (request, response) => {
        try {
            // Create our new Book using the constructor from our model file.
            const newBook = new Book(request.body);
            // Write it to our DB.
            await newBook.save();
            response.status(201).json(newBook);
        } catch (err) {
            response.status(400).json({err: err});
        }
    },
    get: async (request, response) => {
        try {
            // Get the query params from the requests' query string.
            const {title} = request.query;
            // Query our DB.
            const book = await Book.find({title: title});
            response.status(200).json(book);
        } catch (err) {
            response.status(400).json({err: err});
        }
    }
}