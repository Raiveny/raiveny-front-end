import React, { Component } from 'react';
import FormMain from './FormMain';
import Result from './Result ';
import HeadCarousel from './HeadCarousel';
class MainPage extends Component {
    render() {
        return (
            <div>
                            <HeadCarousel />

                <FormMain />
                <Result />
            </div>
        );
    }
}

export default MainPage;