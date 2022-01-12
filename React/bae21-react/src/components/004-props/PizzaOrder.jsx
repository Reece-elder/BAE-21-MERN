import Pizza from "./Pizza";

// Exercise - List of contacts for *cute* cats / dogs / any animal
// Create ContactCardManager.jsx 
// Create ContactCard.jsx
// ContactCard.jsx takes in : name, phone number, image url, quote, address
// Contact card manager should return atleast 5 contact cards 

const PizzaOrder = () => {
    return ( 
        <div>
            <Pizza name="Reece" size="12" flavour="four cheese" image="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"/>
            <Pizza name="Connor" size="13" flavour="Pepperoni Passion"/>
        </div>
        // How am I going to pass the data I want to my child component?

     );
}
 
export default PizzaOrder;