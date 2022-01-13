import { useEffect, useState } from "react";
import axios from 'axios';

const Bar = () => {

    // Our state is going to be the data we pull from the api
    const [beerData, setBeerData] = useState([]);

    // State to check if the API has errored
    const [error, setError] = useState(null);

    // State to check if the data has loaded
    const [loaded, setLoaded] = useState(false);

    // exercise - Using a public API of choice
    // use axios to pull the data down and be able to console.log it out 

    // useEffect to pull the data
    // Passing in a function to pull our data
    // Passing in [] runs once when the page loads and no more
    useEffect(() => {

        console.log(beerData);

        // axios.get/post/delete('/PathToSendTo', body / options)
        axios.get(`https://api.punkapi.com/v2/beers`)

        // Once you have got the data: 
        // set loaded to true
        // setting beerData to whatever the response is
        .then((response) => {
            setLoaded(true);

            // What does the data look like when pulling it
            setBeerData(response.data)
            console.log("===========================");
        })
        .catch((error) => {
            // If there is an error in pulling data do the following:
            // Data has loaded
            // Set the value of error to the error we receive
            setLoaded(true);
            setError(error);
        });
    },[loaded]);

    return ( 
        <div>

        </div>
     );
}
 
export default Bar;