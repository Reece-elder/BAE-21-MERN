// Product will be our child to display data
// Basket will store our products, and render them out 
// Manager will be the parent class

import { useState } from "react";
import Basket from "./Basket";
import Product from "./Product";

// Have a selection of input fields, one for product and one for quantity
// I will be able to add products of a specific name to my basket, basket will then render them 

// State 1 - Product name and quantity
// State 2 - Whats contained in basket

const Manager = () => {

    // State for productName + qty
    const [productName, setProductName] = useState("");
    const [qty, setQty] = useState(0);

    // State for basket
    const [basket, setBasket] = useState([]);

    // Function called addToBasket takes in data (prod name and qty)
    const addToBasket = (data) => {

        // Sets the state to be equal to what you pass in
        setBasket((basket) => {

            // Rather than replacing what is already in the array, it puts it at the end
            // return an array = [...(ignore all of the first stuff), newData]
            // ... in array means ignore all of the first ["a",...,"d"]
            return [...basket, data]
        });
    };

    return ( 
        <div>
            <h3> Manager</h3>
            <Product setProductName={setProductName} setQty={setQty} addToBasket={addToBasket} productName={productName} qty={qty}/>
            <Basket basket={basket}/>
        </div>

     );
}
 
export default Manager;