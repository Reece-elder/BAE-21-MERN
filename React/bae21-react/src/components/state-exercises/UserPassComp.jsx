import { useState } from "react";

const UserPassComp = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Create a component that saves the username and password 

    return ( 
        <div>
            <input type="text" name="username" onChange={
            (event) => {
                setUserName(event.target.value);
            }
        }/>
        <input type="password" name="password" onChange={
            (event) => {
                setPassword(event.target.value);
            }
        }/>
        <h2> Username: {userName}</h2>
        <h2> Password: {password}</h2>

        </div>

     );
}
 
export default UserPassComp;