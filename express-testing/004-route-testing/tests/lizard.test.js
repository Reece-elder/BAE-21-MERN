const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {Lizard} = require('../models/lizard.js');

const server = require('../index.js');

chai.use(chaiHttp);

describe('route testing', function(){

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

})