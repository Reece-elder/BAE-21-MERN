const router = require('express').Router();

const {Fish} = require('../models/fish.js');

// Test route that listens for '/' and console.logs "Hello!"
router.get('/', (req, res) => {
    console.log("Hello!");
    res.send("it worked!");
});

// Basic Post request
router.post('/create', (req, res, next) => {
    const body = req.body;
    console.log(body);
    const fish = new Fish(body);
    fish.save().then((result) => {
        res.status(201).send(`${result.fishName} has been added to fish tank!`);
    })
    .catch((error) => {
        // Create an error object for us to 'handle'
        const err = new Error(`Object requires FishName to be entered`);

        // Pass our error to error handling middleware
        next(err);
    })
});

module.exports = router;