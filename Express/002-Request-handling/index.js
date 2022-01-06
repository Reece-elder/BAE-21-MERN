// Import Express package as a variable called express
const express = require('express');

// Making a variable called app that is equal to express
const app = express();

// A basic get request to return a console log
// app.METHOD("/path", whatRequestDoes() (as an arrow function))
app.get("/hello", () => {
    return console.log("site accessed!");
})

app.delete("/delete", () => {
    console.log("Deleted item!");
})



// The app listening function is at the bottom
// Making a new variable called server, it is equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});
