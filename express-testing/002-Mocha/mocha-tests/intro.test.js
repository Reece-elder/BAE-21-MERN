// Mocha tests are designated with the following:
// describe() - Test Suite, groups of tests together 
// it() - An individual test

// describe('Message of what the group is', whatYoureTesting())
describe('My first group of tests', function(){

    // it('Message of the test', whatYouReTesting())
    it('Should print the word hello', function() {
        console.log("Hello");
    });

    it('will print the number 5', function() {
        console.log(5);
    })

});

describe('Second group of tests', function() {
    it('Will print Hello World', function() {
        console.log("Hello World");
    })
});

// To run mocha tests 
// `mocha <name of test folder>`
// `mocha mocha-tests`

// Exercise - Create a tests folder
// - Create a test file
// In the test file create a describe test group and a it test just printing out "Hello World"