import React, { Component } from 'react';


class Result extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.searchValue}</h1>
          </div>
        );
    }
}

export default Result;