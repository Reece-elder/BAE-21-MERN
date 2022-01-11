import Pizza from "./Pizza";

// Exercise - List of contacts for *cute* cats / dogs / any animal
// Create ContactCardManager.jsx 
// Create ContactCard.jsx
// ContactCard.jsx takes in : name, phone number, image url, quote, address
// Contact card manager should return atleast 5 contact cards 

const PizzaOrder = () => {
    return ( 
        <div>
            <Pizza name="Reece" size="12" flavour="four cheese"/>
            <Pizza name="Connor" size="13" flavour="Pepperoni Passion"/>
        </div>
        // How am I going to pass the data I want to my child component?

     );
}
 
export default PizzaOrder;