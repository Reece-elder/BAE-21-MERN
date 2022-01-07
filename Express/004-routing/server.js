// Importing our packages
const express = require('express');
const cors = require('cors');

// initialising app as the express function 
const app = express();

// Common middleware
app.use(express.json());
app.use(cors());

// Import the route (as lizardRoutes) into server.js
const lizardRoutes = require('./routes/lizardRoutes.js');

// Tell server to use this route - use middleware to do this
// if any request begins with /lizard use the lizardRoutes route file
app.use('/lizard', lizardRoutes);
app.use('/aquarium', aquariumRoutes);

app.use((req, res, next) => {
    console.log("middleware here!");
    next();
})

// Listen on port 5015
const server = app.listen(5015,() => {
    console.log(`Server started successfully on port ${server.address().port}`);
});