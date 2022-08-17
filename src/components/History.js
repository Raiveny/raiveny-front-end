import React, { Component } from 'react';
import Tableuser from "./Tableuser"
import { useAuth0 } from "@auth0/auth0-react";

const History = () => {

    const { user, isAuthenticated, isLoading, email } = useAuth0()
    // console.log('Authenticated ? ', isAuthenticated)
    // console.log('name ? ', user.name)
    // console.log('email ? ', user.email)
    return (
        <>
            <h1 className='history-h1'>History</h1> 
            {isAuthenticated &&
                (
                    <Tableuser useremail={user.email} />
                )
                }
        </>

    );
}

export default History;