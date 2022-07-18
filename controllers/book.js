const mongoose = require("mongoose");
const Book = require('../models/book');

module.exports = {
    create: async (request, response) => {
        try {
            const newBook = new Book(request.body);
            await newBook.save();
            response.status(201).json(newBook);
        } catch (err) {
            console.log("error", err);
            response.status(400).json({err: err});
        }
    }
}