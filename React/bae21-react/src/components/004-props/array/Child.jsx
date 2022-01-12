
import SubChild from "./SubChild";

// Destructuring within the function
// props is what is passed in without destructuring
const Child = (props) => {

    const fruitArray = props.array;
    console.log(fruitArray);

    return (
        <div>
        {/* Render a SubChild for every item in the array */}
        {/* {fruitArray.map((fruit, i) => {
            console.log(fruit);
            <SubChild key={i} fruit={fruit}/>
        })
        } */}
        <SubChild fruit="Apple"/>
        {fruitArray.map((fruit, i) => <SubChild key={i} fruit={fruit}/> )}
        </div>
        
     );
     // You shouldnt render an array without giving it an ID or key!!
}
 
export default Child;