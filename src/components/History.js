import React, { Component } from 'react';
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