const express = require('express');
const cors = require('cors');
const lizardRoutes = require('./routes/lizardRoutes.js');

// Importing in the mongoose stuff
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Error Handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

// Database connection - URI similar to URL, it is a link to a service through the internet
// Connect to MongoDB with - mongoose.connect(uri, options)
// mongodb URI - mongodb://localhost:27017/<db_name>
mongoose.connect('mongodb://localhost:27017/zoo' , {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log("Cant connect to DB :( ");
    } else if (!error) {
        console.log("Connected to DB :D ");
    }
});

// Use routes
app.use('/lizard', lizardRoutes);

// Front end has a form that produces `data`
// Data is sent through the browser to the backend 
// `Parse` the data to make it usable / readable to do stuff with it


// Listen on port 5015
const server = app.listen(5015, () => {
    console.log(`Server started!`);
});
