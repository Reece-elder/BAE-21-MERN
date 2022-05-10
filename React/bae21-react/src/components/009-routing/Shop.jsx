import { useParams } from "react-router-dom";

const Shop = () => {

    // shop/id6282730393
    // Grab the url paramater from the URL
    // Save it as a value called id
    const {id} = useParams();

    return ( 
        // Use value in our H3
        <h3> Shop page of id: {id} </h3>
     );
}
 
export default Shop;