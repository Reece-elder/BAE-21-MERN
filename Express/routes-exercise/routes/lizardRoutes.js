// Contains all of our HTTP 
// Requests / routes for the lizard collection

// Import express.Router()
const router = require('express').Router();

// Import in our nested middleware
const nestedExp = require('../middleware.js');

// router.use(nestedExp());

// Adding my routes
// 200 - ok
// 201 - created
// 202 - accepted
// 204 - ok (No content)
router.get('/getAll', nestedExp, (req, res) => {
    res.status(202).send("Get all accessed!");
});

router.get('/get/:id',(req, res) => {
    console.log(req.params.id);
    res.status(202).send(`document of ${req.params.id} requested`);
});

// Request for a post is *generally* going to be a body of data
router.post('/post', (req, res) => {
    console.log(req.body);
    res.status(201).send("Document posted!");
});

// Using query params for delete, that means you dont need to specify in path
// /delete?name=reece
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(204);
});

router.put('/update/:id', (req, res) => {
    const body = req.body;
    const id   = req.params.id;
    console.log(body);
    console.log(id);
    res.status(201).send(`${id} has been updated!`)
});

module.exports = router;