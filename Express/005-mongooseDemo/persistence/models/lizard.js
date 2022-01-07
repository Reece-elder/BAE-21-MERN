// Our lizard file will be creating a Lizard object
// specifying what params it should take in (colour, name length etc)
// exporting it for our route to use

const mongoose = require('mongoose');

// Deconstructing Mongoose, but make sure you do it this way
const {Schema, model} = mongoose;
// Schema for favFood Array
// Basically embedded document but with only one type
const favFoodSchema = new Schema({
    name: String, 
    typeOfFood: String
});

// create our schema
const lizardSchema = new Schema({
    // Key value pair = name of attribute : Data type 
    lizardName: {
        type: String,
        required: true,
        minlength: 2
    },
    colour: String,
    rating: Number,
    isScary: Boolean,
    length: Number,

    // Array of embedded documents
    favFood: [favFoodSchema],
    // Embedded document
    favToy: {
        toyName: String,
        cost: {
            type: Number,
            required: true,
            max: 15
        }
    },
    // Array of Numbers
    favNumbers: [Number]
});

// Creating the lizard model
const Lizard = model('Lizard', lizardSchema);

// export our model
module.exports = {'Lizard': Lizard};