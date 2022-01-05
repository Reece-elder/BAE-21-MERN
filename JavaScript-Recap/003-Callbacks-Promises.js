console.log("hellllllooooo");

// Callbacks - A function that takes in another function as a paramater 
// 1 - A function to be called back
// 2 - A function that does call back
// 3 - A function that invokes the 2nd one

// Is my function TO BE CALLED BACK
const message = (text) => {
    // alert(`Hello ${text}`);
    console.log("Message sent");
}

// Function that does the callback
// callbackFunc - Is the function that is being passed in
// name - will be the text we pass in at invoke 
const processMessage = (callbackFunc, name) => {
    console.log("Message not sent yet");
    callbackFunc(name);
}

// Invoking processMessage
processMessage(message, "Reece");


// Promises - Are placeholders for some data that WILL be available, immediately, after some time or wont ever be available
// Promises are used because JS is single threaded, when sending a request out the app waits until it receives (or fails) before moving on
// Promises allow JS to be asynchronous

// Promises come in 3 states: 
// Pending   - Not fulfilled OR rejected yet
// Fulfilled - The action relating to the promise is successful
// Rejected  - The action relating to the promise has failed


// Resolve and Reject are callbacks being passed in
let promiseFunc = new Promise( (res, rej) => {

    let a = 1 + 0;
    let b = 4;
    if(a==2){
        // What happens in a success
        res("Succesful! :)"); // Invoke the resolve function, passing in "Succesful"
    } else if( b!=4) {
        // What happens in a rejection
        rej("Failed on 2nd step ");
    } else {
        rej("Failed on third step");
    }
});


//.then() - Whatever the previous function returns, pass it in and say what to do next
//.catch()  - Triggered when the previous function is rejected, fails etc

// Message will either be "Succesful! :)" OR "Failed :( "
promiseFunc.then((message) => {
    console.log(`This is the .then block, status is ${message}`);
}).catch((message) => {
    console.log(`This is the .catch block and status is ${message}`);
}).then(() => {
    console.log("This runs regardless of message");
})