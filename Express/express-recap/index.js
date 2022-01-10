// The first thing to put on the index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fishRoute = require('./routes/fishRoutes.js');

// Creating our app variable
const app = express();

// Use our middleware (not custom)
app.use(express.json());
app.use(cors());

// When sending data to front end 
// CORS - Access Blocked error 500
// Doesn't like the transfer of data from backend to front end 

// Connect to our db 
mongoose.connect('mongodb://localhost:27017/zoo', {useNewUrlParser: true}, 
(foo) => {
    if(foo) {
        console.log("Couldn't connect..");
    } else {
        console.log("Connected!");
    }
});

// Adding our route
app.use('/fish', fishRoute);

// Add error handling middleware - Adding in err
// when a route says next(err) - it will find the next middleware with (err) as a parameter

app.use((err, req, res, next) => {
    console.log(err.stack);
    //err.message = string added when creating error in first place
    res.status(500).send(err.message);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.message);
})

// Tell our index.js to listen to a specific port (allows other tools to access the server)
const server = app.listen(5015, () => {
    console.log(`Connected! on port ${server.address().port}`);
});