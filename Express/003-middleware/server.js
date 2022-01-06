const express = require('express');
const cors = require('cors');

// Initialise our express app
const app = express();

// Common Middleware - Middleware imported from NPM / Express
// Generally does a simple admin job

// To tell our app what to do when it recieves JSON files
app.use(express.json());
//next();

// CORS - Will prevent any unwanted CORS errors
app.use(cors());
// next();

// Middleware (uses app.use)
// Middleware `does something` then calls next()
// next() invokes the subsequent middleware (with next passed in)
// Whenever a request is made ALL middleware are fired

// Custom Middleware

app.use((req, res, next) => {
    console.log("First piece of middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second piece of middleware");
    next();
});

// Nested Middlware
// Middlewares are arrow functions saved as variables
const logger = (req, res, next) => {
    console.log(req.params);
    console.log(new Date());
    next();
}

const passwordChecker = (req, res, next) => {
    if(req.body.password == "password123"){
        next(); // If true pass onto the request
    } else {
        error();
    }
}

const nested = (req, res, next) => {
    console.log("Nested middleware!");
    next();
}


// Request

// Request with nested middleware
// app.get("path", nested_middleware, arrow function on what it does)
app.get('/nested/:id', logger, nested, passwordChecker, (req, res) => {
    console.log("Request fired");
    res.send("nested middlware fired");
})

app.get('/' , (req, res) => {
    console.log("Basic middleware");
    res.send("site accessed!");
})

// app.post('/post', (req, res) => {
//     res.send("Posted data");
// })

// Starting server on port 5015
const server = app.listen(5015, () => {
    console.log("Server started");
});