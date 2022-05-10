# Routing

React is generally a one page application
- React has one html page and can generate or load components as it needs

Have components for other pages (Home, About, Contact us) and tell app.js to use this whole component

app.js -> Some component on the page (Parent) -> Child component

app.js -> shop.jsx
       -> about.jsx

Traditional HTML routing
<nav bar> -> <a href="./html/shop.html">/>

React - Requires some way to change what components are rendered in app.js
<div>
    <Shop>  
    <Home>
</div>

`npm i react-router-dom`
