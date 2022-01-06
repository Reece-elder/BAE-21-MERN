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
