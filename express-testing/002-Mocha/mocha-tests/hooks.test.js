// Hooks are used to organise and configure your test environment
// organise, certain 'tests' to run first
// Setup test    - setup environment - variables, global info
// Teardown test - close environment - removing data from database 

describe('hooks', function(){

    let string;

    // Setup test 
    before(function() {
        console.log("Run once before first test in this describe");
        string = "test-String";
    });

    it('Will print hello world', function(){
        console.log("Hello world!");
    });

    it('Will print hello world again', function(){
        console.log("Hello world again");
    });

    // Teardown test
    after(function(){
        console.log("Runs after the tests");
    })

    beforeEach(function(){
        console.log("Will run before each test");
    });

    afterEach(function(){
        console.log("after each test");
    });


    // Two other config things
    // .only - Only this test from this suite will run
    // .skip - Skip this test equiv - @disabled

    // it.only('Only this test will run', function(){
    //     console.log("Only this test!");
    // });

    it.skip('This test will skip', function(){
        console.log("Skip this test");
    });
    
    // Useful for having a large test suite and you know one test doesn't work
    // The entire test suite to fail, just because one feature hasn't been implemented 
});

