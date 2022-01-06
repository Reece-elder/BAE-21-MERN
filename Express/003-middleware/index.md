# Middleware

Middleware is used to aid communication between two `nodes` client and server

Middleware in express is a function with REQ, RES and NEXT

If a function has next as a callback, when it is complete it will find the subsequent function with the word next

Exercise - Add custom middleware that prints out the current date and time for every request
- Add CORS common middleware for every request

Stretch goal - Add an extra piece of middleware that returns a random number between 1 and 100