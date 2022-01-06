// Creating a variable TO EXPORT
const greeting = "Hello World!";

// Create a function TO EXPORT
const printGreeting = () => {
    console.log("Hello world, i've been exported :o");
}

// Export both variable and function as module objects

// module.exports.<name_exported_variable> = <name_of_variable>
module.exports.greetingString = greeting;

module.exports.greetingFunc = printGreeting;