// Step 3
//  Attach hooks functions.
//  useState - used to update the state inside a functional component.
//  useEffect - runs after every completed render, but we can choose to fire it
//      only when certain values have changed. This is similar to lifecycle
//      methods from class-based components.
import {useState, useEffect} from 'react';
import axios from "axios";

// Thanks to hooks system, we can easily share same code across different
// components. This makes our code more flexible.
const useResources = resource => {
    // Step 4
    //  Initialize states inside functional component.
    const [resources, setResources] = useState([]);

    // Step 5
    //  Attach useEffect hooks which combine componentDidMount and
    //  componentDidUpdate lifecycle methods from class-based components.
    //  The inner function will be called every time that our component gets
    //  rendered to the screen or updated.
    //  The second argument - when the values of the array will change, then
    //  the arrow function will be invoked. Otherwise, nothing will happen.
    //  If we don't provide the second argument, then useEffect inner function
    //  will be invoked every time when component rerender.
    //  useEffect must return a clean function or nothing. Promises and async
    //  function are not supported, but we can call an async function inside
    //  an effect.
    useEffect(() => {
        (async resource => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            // Update state value by using hook system.
            setResources(response.data);
        })(resource);
    }, [resource]);

    // Return the data.
    return resources;
};

export default useResources;