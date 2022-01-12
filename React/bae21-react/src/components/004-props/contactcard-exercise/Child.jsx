import SubChild from "./SubChild";

const Child = ({pizzaArray}) => {

    console.log(pizzaArray);

    return ( 
        <div>
        {/* Using Curly brackets as running JS within the return() */}
        {
            pizzaArray.map((pizza, i) => {
                console.log(pizza);
                return <SubChild pizza = {pizza}/>
            })
        }

        </div>

     );
}
 
export default Child;