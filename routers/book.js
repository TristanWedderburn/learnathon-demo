const express = require('express');
const Book = require('../controllers/book');

const router = express.Router();

// Use our router to made a URL to a specific controller method.
router.post('/', Book.create);
router.get('/', Book.get);

module.exports = router;