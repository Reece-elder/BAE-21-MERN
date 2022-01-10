// Importing in Mongoose
// Deconstructing Mongoose to make our schema and model
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// Creating our Schema - Name, colour, length
const fishSchema = new Schema({
    fishName: {
        type: String,
        required: true
    },
    colour: String,
    length: Number
});

// Create an object called Fish that is equal to model('name', schema)
const Fish = model('Fish', fishSchema);

module.exports = {'Fish': Fish};