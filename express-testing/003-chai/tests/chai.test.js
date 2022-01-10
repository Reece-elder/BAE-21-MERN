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

describe('exercise questions', function(){

    it('An object should have property name', function(){

        // Arrange
        let testObject = {
            name : "test Object"
        };

        // Act 
        testObject.name = "new data";

        // Assert
        expect(testObject).to.contain.keys('name');
        expect(testObject.name).to.be.equal('new data');

    });

    it('A String should contain "Reece"', function(){

        // Arrange
        let testString = "Hello Reece";
        let fruitArray = ["Apple", "Banana", "Kiwi"]

        // Act

        // Assert
        expect(testString).to.contain("Reece");
        expect(fruitArray).to.include("Banana");

    });

    it('should check if 5 is odd', function(){

        // Arrange
        let num = 5;
        let odd;

        // Act
        if(num % 2 == 0){
            odd = false;
        } else {
            odd = true;
        };

        // Assert
        expect(odd).to.be.equal(true);
    });
});