import React, { Component } from 'react';
import img1 from './assets/doc2.jpg'
import img2 from './assets/doc3.jpg'
import img3 from './assets/doc4.jpg'
import img4 from './assets/doc6.jpg'
class Images extends Component {
    render() {
        return (
            <div className='image-src'>
                <img className='item1' src={img1} width="400px" height='250'/>
                <img className='item2' src={img2} width="300px" height='250'/>
                <img className='item1' src={img3} width="300px" height='250'/>
                <img className='item2' src={img4} width="300px" height='250'/>
            </div>
        );
    }
}

export default Images;