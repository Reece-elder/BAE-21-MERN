import {useEffect, useState} from 'react';

const Clock = () => {

    // Use State to store and set the current time 
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [start, setStart] = useState(false);

    // Use useEffect to console.log and run a function in 1 second 
    // First parameter to pass in is my function, what does it do on rerender
    useEffect(() => {
        // set timeout takes in parameter and time, does the paramater (function) after the time 
        setTimeout(tick, 1000);

        // passing in time as a variable [], whenever time changes, do the useEffect 
    },[start]);
    
    // Some function set the current time
    const tick = () => {
        // I want it to set the state to the current time 
        setTime(new Date().toLocaleTimeString());
    }

    // Will cause an infinite loop!!
    // tick();

    return ( 
    <div>
        <h3> Clock! </h3>
        <h4> Time is {time}</h4>
        <button type='button' onClick={() => setStart(!start)}> Click me to do timer! </button>
    </div> 
    );
}
 
export default Clock;