// Import in chai
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Using Chai, use the chaiHttp module (rather than a different framework)
chai.use(chaiHttp);

// When testing, we should follow a framework
// Arrange
// Act
// Assert

describe('Basic testing process', function(){

    it('should return 2 when 1 + 1', function(){

        // Arrange - declaring my variables
        let num1 = 1;
        let num2 = 1;
        let sum;

        // Act - What am I testing
        sum = num1 + num2;

        // Assert - uses expect from our chai
        expect(sum).to.equal(2);

    });

    it('the string should be "Red"', function(){

        // Arrange
        let testString;

        // Act
        testString = "Red";

        // Assert
        expect(testString).to.equal("Red");
        expect(testString).to.be.a('string');

    });

});