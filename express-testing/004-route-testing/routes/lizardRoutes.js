// Import express.Router()
const router = require('express').Router();

// Import in the model
const { Lizard } = require('../models/lizard.js');

// When testing the routes we need to check
// what is the route responding with
router.get('/test', (req, res) => {
    res.status(201).send("Test path succesful!");
})

// Adding my routes
// 200 - ok
// 201 - created
// 202 - accepted
// 204 - ok (No content)
router.get('/getAll', (req, res) => {
    // Using the Lizard model we imported, use the .find() function
    // .find() returns ALL DATA
    // pass in error first to access the data
    Lizard.find((error, lizards) => {
        res.status(200).send(lizards);
    });
});

router.get('/get/:id',(req, res) => {
    console.log(req.params.id);
    Lizard.findById(req.params.id, (error, lizard) => {
        res.status(200).send(lizard);
    });
    
});

// Request for a post is *generally* going to be a body of data
router.post('/post', (req, res, next) => {
    console.log(req.body);

    // Pass the req body into the schema, generate a new lizard object
    const lizard = new Lizard(req.body);

    // Using inbuilt save function of lizard, to post it into database
    lizard.save().then((result) => {

        // response is 201 and return the name of lizard and string
        res.status(201).send(`${result.lizardName} added to database :) `);
    })
    .catch((error) => {
        const err = new Error('Data is incorrect :( ');
        next(err);
    });

});


router.delete('/delete/:id', (req, res) => {
    Lizard.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("lizard deleted");
    });
});

router.put('/update/:id', (req, res) => {
    const body = req.body;
    const id   = req.params.id;
    console.log(body);
    console.log(id);
    res.status(201).send(`${id} has been updated!`)
});

module.exports = router;