import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Tableuser from "./Tableuser"


class History extends Component {

    render() {
        // const { user} = this.props.auth0;

        return (

            <>
                <h1 className='history-h1'>History</h1>

                <Tableuser />
            </>

        );
    }
}

export default History;