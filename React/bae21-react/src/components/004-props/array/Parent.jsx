// Parent pass props to Child
// Child pass props to subchild
// Child renders data
import Child from "./Child";

const Parent = () => {

    // Exercise - 
    // Using your contact card code, create an array of objects (of animals)
    // Make your manager render a contact card for each using some kind of loop 

    const arrayFruits = ["raspberries", "kiwi", "watermelon", "grapes", "mango"];

    return ( 
        <Child array={arrayFruits}/>
     );
}
 
export default Parent;

