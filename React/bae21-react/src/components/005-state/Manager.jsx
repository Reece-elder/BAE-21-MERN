// Manager is going to hold state and return the components
// Counter is going to have a int value it can update
// Display is going to show the current int value

import {useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const Manager = () => {

    // Set up our state
    // const [variable name, set<variable name>] = useState(<starting value>)
    // count is getCount and setCount lets us set the value
    // Referred to as a hook, was new as of 2020?? - A way to let react do common stuff under the hood 
    const [count, setCount] = useState(2);

    console.log(count);
    console.log(typeof count);
    console.log(setCount);

    const printName = () =>{
        console.log("reece");
    };

    // Every time state changes data is pulled again 
    // setState - causes re renders
    // setCount(7);

    return ( 
        <div>
            <h2> Managers number: {count} </h2>
            <Counter setCount={setCount}/>
            <Display count={count}/>
        </div>
     );
}
 
export default Manager;