import Child from "./Child";

const Manager = () => {

    // My array of objects
    const pizzaArray = [
        {
            type : "Pepperoni",
            size : 12,
            stuffedCrust : true
        },
        {
            type : "Veggie Volcano",
            size : 10,
            stuffedCrust : false
        },
        {
            type : "BBQ Beef",
            size : 13,
            stuffedCrust : true
        }
    ];

    return ( 
        <Child pizzaArray={pizzaArray}/>
     );
}
 
export default Manager;