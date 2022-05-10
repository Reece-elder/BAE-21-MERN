
// Destructuring what we pass in into name, size and flavour
const Pizza = ({name, size, flavour, image}) => {
    return ( 
        <div>
            <h2> Name of customer is {name} </h2>
            <h2> Size of pizza is {size} </h2>
            <h2> Flavour of pizza is {flavour} </h2>
            <img src={image} alt="pizza"/>
        </div>

     );
}
 
export default Pizza;