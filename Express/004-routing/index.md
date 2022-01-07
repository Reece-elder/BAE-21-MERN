# Routing

HTTP Requests (app.get("/stuff")) - routes 
So far, all of our routes have been written in our main file server.js

Zoo:
- Lizard pen
    "/getAllLizards"
- Monkey Enclosure
    "/getAllMonkeys" // Not good practice, 
- Aquarium

Some routes in our project will overlap 

Routes folder 
  - lizardRoutes
  - monkeyRoutes
  - fishRoutes

EXPRESS IS NOT OBJECT ORIENTED PROGRAMMING (ish) 
- lizard Domain, lizard Controller, lizard service 

Route file -> Service + Controller merged into one


Exercise - In your groups (but do the work individually)

- Create a new NPM project 
- install all packages you need
- Create routes folder with atleast two route files, relating to the mongoDB work you've done
- Each route file should have GET, POST, PUT, DELETE route with correct req, res etc 
- Response status code 202 "File deleted" 
- 2 custom middleware 
- 2 nested middleware (2 routes have the nested middleware)

Come back 16:15 (unless you hear otherwise)
