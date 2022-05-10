import { useState } from "react";
import Product from "./Product";

const SearchTable = () => {
    // Create a ProductTable component that filters information based on the value of a Search field.
    // - Creating an input field - search term 
    // - Creating a loop that renders products with that search term
    
    const [query, setQuery] = useState("");

    const listOfProducts = [
        {
            name : "ball",
            quantity: 5,
            cost : 10
        },
        {
            name : "frisbee",
            quantity: 2,
            cost : 10
        }, 
        {
            name : "skipping rope",
            quantity: 1,
            cost : 10
        }, 
        {
            name : "slide",
            quantity: 27,
            cost : 10
        }, 
        {
            name : "tennis ball",
            quantity: 3,
            cost : 15
        },  
    
    ]

    return ( 
        <div>
            <input type="text" name="product" onChange={(event) => setQuery(event.target.value)}/>

            {/* map over my array of products, only rendering them if they match the query */}
            {listOfProducts.map((product, i) => {
                if(product.name === query){
                    return <Product product={product}/>
                }
            })}
        </div>
     );
}
 
export default SearchTable;