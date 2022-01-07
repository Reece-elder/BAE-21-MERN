// Importing the stuff we need
const express = require('express');
const cors = require('cors');

// Import routes here
const lizardRoutes = require('./routes/lizardRoutes.js');
const fishRoutes = require('./routes/fishRoutes.js');

// initialising app as express()
const app = express(); 

// Middleware 
app.use(express.json());
app.use(cors());

// This will fire for every request 
app.use((req, res, next) => {
    console.log(new Date());
    next();
});

// This will fire for every request 
app.use((req, res, next) => {
    console.log("middleware fired");
    next();
});

// Using the routes
app.use('/lizard', lizardRoutes);
app.use('/fish', fishRoutes);


// Listen on port 5015
const server = app.listen(5015, () => {
    console.log(`Server started!`);
});

