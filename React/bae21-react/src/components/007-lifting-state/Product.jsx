const Product = ({setProductName, setQty, addToBasket, productName, qty}) => {

    const add = () => {
        const order = {
            productName : productName,
            quantity : qty
        }
        addToBasket(order);
        console.log(order);
    };

    return ( 
        <div>
            <h3> Product page </h3>
            <h4> Product name</h4>
            <input type="text" name="product" onChange={(e) => setProductName(e.target.value)}/>
            <br></br>
            <h4> Product qty</h4>
            <input type="number" name="quantity" onChange={(e) => setQty(e.target.value)}/>

            <button type="button" onClick={add}> Add to Basket! </button>
        </div>
     );
}
 
export default Product;