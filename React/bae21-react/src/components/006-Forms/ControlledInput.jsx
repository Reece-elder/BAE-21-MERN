import { useState } from "react";

const ControlledInput = () => {

    // Creating state for a username, its starting value is ""
    const [username, setUsername] = useState("");

    let tempUser;

    return ( 
        <div>
            <h3> Form </h3>
            <input type="text" name="username"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
                // setUsername(event.target.value)
            }
            }/>

            <button type="button" onClick={() => {
                setUsername(tempUser);
            }} />

            <h3> The username: {username} </h3>
        </div>
     );
}
 
export default ControlledInput;