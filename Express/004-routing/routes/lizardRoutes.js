// This file will be concerned with the routes for my lizard collection 

// Importing in the router function of the express object
const router = require('express').Router();

// All of our routes go below, and use router rather than app

router.get("/readAll", (req, res) => {
    console.log("read all accessed");
    res.status(202).send("read all accessed");
});

// Export our router for server.js to use
module.exports = router;