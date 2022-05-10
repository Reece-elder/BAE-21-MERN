const CompWithVars = () => {

    // anything outside of return() is just regular JS
    let name = "Reece Elder";
    let favNumber = 36;

    // With return() you cant return more than one element
    // a Div that contains x elements is only ONE ELEMENT
    return(
        // When in return() if you surround anything in {} regular js
        <div>
            <h3> My name is {name} </h3>
            <h4> This is a &#123; name &#125; </h4>
            <h5> My fav number is {favNumber} </h5>
        </div>
    )

}

export default CompWithVars;