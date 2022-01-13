import { useEffect, useState } from "react";
import HookChild from "./HookChild";

const HookParent = () => {

    // Add state
    const [name, setName] = useState("");

    // Add UseEffect
    useEffect(() => {
        document.title = name;
        // I only want this to update when names state changes (when the app starts)
        // Leaving it as [] only runs when the app starts
    },[name])

    return ( 
        <div>
            {/* Returning HookChild but passing in the setState function */}
            <HookChild setName={setName} name={name}/>
        </div> 
    );
}
 
export default HookParent;