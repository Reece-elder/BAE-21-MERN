console.log("Hello from 004!");

// Promises are used to create asynchronous code 
// Promises tend to be callbacks, within callbacks, within callbacks.. callback hell

const promiseBased = () => {
    return Promise.resolve("hello everyone");
};

promiseBased().then((message) => {
    console.log(message);
});

// Async based method 

// When creating async code YOU MUST ADD THE WORD async before the ()
const asyncBased = async () => {
    return Promise.resolve("Hello from Async stage 1");
}

// When the code is complete, whatever it returns print out 
asyncBased().then(console.log);

// Use a timeout to wait for a period of time before resolving
const asyncTimeout = async () => {
    console.log("Timer starts");
    let newProm = new Promise((res, rej) => {

        // With the new promise, when 3000 milliseconds has gone
        // Run the resolve callback function, passing in "Timer has finished"
        setTimeout(() => {
            res("Timer has finished! :D")
        }, 5000)
    });
    // result = what newProm returns
    // await keyword WAITS for the promise to resolve 
    let result = await newProm;
    console.log(result);
}

asyncTimeout();