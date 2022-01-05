// alert("Annoying pop up!");

// Let can be changed 
let num = 123;

// Const is constant
const string = "reece";

// Can be accessed globally and ran without initialising because its a var
var forbiddenKnowledge = "messes up scope";

var bankDetails = "123456673";


// Make a basic function - Functions are snippets of code that JavaScript can run

function add(x, y) {
    return x + y;
};

console.log(add(5,10));

add(10,10);
console.log(add());


// Function Expressions - Functions that are stored as variables meaning you can run them locally

const sub = function(x,y) {
    return x - y;
};

console.log(sub);


// Arrow Function - Are shorthand methods of writing functions (both basic and expression) - to improve legibility (ish)

let hello = function(name) {
    return `Hello ${name}!` // Template Literal means dont have to do this! -> "Hello " + " " + name + "!"
}

// Removed the word function
// Added a => after the bracket
hello = (name) => {
    return `Hello ${name}!`
}

// If the function is exactly one statement that is being returned remove the {} and word return 
hello = (name) => `Hello ${name}`;

// If you're passing in a paramater you can remove the () before the arrow
hello = name => `Hello ${name}`;

console.log(hello("Reece"));