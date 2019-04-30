// Step 1
//  Import state component system when we want to use states in the
//  functional component.
import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from "./UserList";

const App = () => {

    // Step 2
    //  Array destructuring from a result of a useState function.
    //  resource - Contains the present value of this piece of state.
    //  setResource - Function to call when we want to update our state
    //      (and rerender).
    //  useState('posts') - Function from React with starting value for this
    //      piece of state - similar to when we initialized our state object.
    //
    //  When we use hooks we store a single value that we care about. So if we
    //  wanted to have some other piece of state inside of application we can
    //  use useState as many times we want. In class-based components, we will
    //  add another field to the state object.
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList/>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;