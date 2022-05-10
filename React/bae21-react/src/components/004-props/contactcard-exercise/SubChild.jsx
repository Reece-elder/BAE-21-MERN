// an object called prop is being passed in
// prop contains an object called pizza
// pizza contains the variables I want
const SubChild = ({pizza}) => {

    // Destructuring pizza to give me the values
    const {type, size, stuffedCrust} = pizza

    console.log(type);

    return ( 
        <div>
            <h2> Pizza type : {type} </h2>
            <h3> Pizza size : {size} </h3>
            <h3> Pizza stuffed crust : {stuffedCrust.toString()} </h3>
        </div>
     );
}
 
export default SubChild;