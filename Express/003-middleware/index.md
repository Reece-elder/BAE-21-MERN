# Middleware

Middleware is used to aid communication between two `nodes` client and server

Middleware in express is a function with REQ, RES and NEXT

If a function has next as a callback, when it is complete it will find the subsequent function with the word next

Exercise - Add custom middleware that prints out the current date and time for every request
- Add CORS common middleware for every request

Stretch goal - Add an extra piece of middleware that returns a random number between 1 and 100


# Nested Middleware

All regular middleware is fired from top to bottom with EVERY REQUEST
Middleware IS NOT A REQUEST

app.get("/hello") <-- Request
app.use()         <-- Middleware

Nested middleware looks different to regular, and you specify in what requests it should run

Pass in a nested middleware as a callback into a request

app.get("/test", (req, res, nested_middleware) => {

})

Exercise - Create a nested middlware that prints out the word "nested" 
- Make one of your requests use the nested middleware