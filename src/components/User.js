import React from 'react';

const User = params => {
    return (
        <div>
            <h1>Welcome User {params.username}!!</h1>
            <h3>This is the user page</h3>
            <h6> this is some text on the user page</h6>
            <p>hooray!!</p>
        </div>
    )
}

export default User;