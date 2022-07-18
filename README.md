# learnathon-demo

#### Example cURL commands:
Create a new book:
`curl -X POST -H "Content-Type: application/json" -d '{"author": "Tristan", "title": "Learnathon", "isbn": "978-3-16-148410-0" }' http://localhost:8000/book/`

Get a book by the title:
`curl -X GET "http://localhost:8000/book?title=Learnathon"`