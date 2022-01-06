const express = require('express');
const cors = require('cors');

// Initialise our express app
const app = express();

// Common Middleware - Middleware imported from NPM / Express
// Generally does a simple admin job

// To tell our app what to do when it recieves JSON files
app.use(express.json());

// CORS - Will prevent any unwanted CORS errors
app.use(cors());

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

// 

// Request

app.get('/' , (req, res) => {
    res.send("site accessed!");
})

app.post('/post', (req, res) => {
    res.send("Posted data");
})

// Starting server on port 5015
const server = app.listen(5015, () => {
    console.log("Server started");
});