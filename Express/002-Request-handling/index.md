# Request Handling

Request handling is specifying what you want the app to do when it receives requests from a front end
- The path: "/get/Book"
- The Method: GET
- The Body:

GET    - Read request
POST   - Create request
PUT    - Update request (takes in an ID and replaces the entire document)
PATCH  - Update request (only updates what has been modified)
DELETE - Delete request

Body - Is the data that is sent from the client to the server (data to put in a database)

Add a basic get request to our server that will return some data

Exercise -
Create 4 request handlers (GET, POST, PUT, DELETE)
Each just console logs out "Item added.." 

Requests and Responses

Requests - Client sends us (Search queries, id numbers, body etc)
Response - Server sends the client (data from the database)


Exercise 

Create the 4 basic crud (CREATE, READ, UPDATE, DELETE)
Each request should console.log out the request

Delete - Takes in an id and prints it out (URL Param)
Read   - Takes in URL Query and prints them out 
Create - Takes in a body (using postman) and prints it out
Update - Takes in an id and body, prints them both out (Either way)

# Response

Responses are what the server sends to the client, 
Without specifying a response the client is hanging and waiting for some data

res.send()   -> What you're passing back 
res.status() -> HTTP status of the response

Exercise - Add a response to each of your requests, with an appropriate status code and some text to display 