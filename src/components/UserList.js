// This component has been created for demonstrating how we can reuse code by
// using the hooks system.
import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))};
        </ul>
    );
};

export default UserList;