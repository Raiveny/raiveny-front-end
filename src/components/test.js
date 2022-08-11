import React, { Component } from 'react';
import img from './assets/download.jpg'

class test extends Component {
    render() {
        return (
            <div>
                <>
                <h1>Hello Team</h1>
                <img src={img} alt={''}/>
                </>
            </div>
        );
    }
}

export default test;