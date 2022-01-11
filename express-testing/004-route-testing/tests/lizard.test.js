const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {Lizard} = require('../models/lizard.js');

const server = require('../index.js');

chai.use(chaiHttp);

describe('route testing', function(){

    // Before function that will add atleast one document 
    // so we can delete / get without needing to add anything

    let testID;

    before(function(done){
        console.log("Setup of environment");

        // Generate a new lizard object
        const testLizard = new Lizard({
            "lizardName" : "test name",
            "colour" : "test colour",
            "rating" : 5,
            "isScary" : true
        });
        testLizard.save().then((result) => {
            // Saving the _id of the lizard we create so other tests can delete it
            testID = result._id.toString();
            done();
        });
    });

    // Adding an after function that will clear ALL DATA 
    after(function(done) {
        Lizard.deleteMany({}).then(() => {
            console.log("Everything deleted!");
            done();
        });
    });

    // Object that can be used THROUGHOUT testing
    const testLizard = {
        lizardName: "test name",
        colour: "test colour",
        rating: 1,
        isScary: true
    };

    // pass in the word done, to let chai know when the async code is done
    it('Should respond with "Test path succesful"', function(done){

        // Arrange
        // Telling chai to use index.js
        chai.request(server)

        // Act 
        // use server to make a get request with '/test'
        .get('/lizard/test')

        // .end is used for async, saying when you have ended 
        // i.e when you have got some data / returned something
        // either error or give a response
        .end((err, res) => {

            if(err) {
                console.log("Error occured");
                done(err);
            };

            // Assert
            // Whatever the get request returns we test here
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text',"Test path succesful!");
            done();
        });
    });

    it('Should post data to the DB and return <name> added to db', function(done){

        // Arrange
        chai.request(server)

        // Act
        .post('/lizard/post')

        // Sending data as a body you use .send(data)
        .send(testLizard)

        // Will be the same for more or less every route
        .end((err, res) => {

            if(err) {
                console.log("Error occured");
                done(err);
            };

            // Assertion
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text',`${testLizard.lizardName} added to database :) `);
            done();
        });
    });

    it('Should return all lizards from the db', function(done){

        // Arrange
        chai.request(server)

        // Act
        .get('/lizard/getAll')

                // Will be the same for more or less every route
                .end((err, res) => {

                    if(err) {
                        console.log("Error occured");
                        done(err);
                    };
        
                    // Assertion
                    const resBody = res.body;
                    expect(res).to.have.status(200);
                    expect(resBody).to.not.be.null;

                    // .map - Loops through an array and runs a command
                    resBody.map((lizard) => {
                        expect(lizard).to.be.a("Object");
                        expect(lizard).to.contain.keys("lizardName");
                    });
                    done();
                });         
    });

    // Exercise - Either in groups or on your own
    // Add tests to your most up to date project, with atleast 4 routes in
    // Post test, get test, update test and delete test

    // Stretch goal - See how you can use hooks (before, after) to your advantage

})