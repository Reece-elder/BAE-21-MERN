// In a jsx file if you type in sfc it stands for 'stateless functional component'

import Child from "./Child";

// Exercise - Create a parent child relationship for a fake website, use the following components
// - app.js
// - page.jsx
// - nav.jsx
// - logo.jsx
// - body.jsx
// - footer.jsx

// These files dont have to be formatted but just return a <h3> page </h3> or <h4> footer </h4>
// app.js should only have one component it renders 

const Parent = () => {
    return ( 
        // This parent will be rendering the child component
        <Child/> // This returns h2
     );
}
 
export default Parent;