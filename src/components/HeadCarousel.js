import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import head1 from './assets/medicine.jpg'
import head2 from './assets/medicine1.jpg'
import head3 from './assets/medicine2.jpg'
// import {head1,head2, head3} from '/home/eman/301course/midproject/raiveny-front-end/src/components/assets'
class HeadCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head1}
                            alt="First slide"
                            width={"300"} height={"400"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head2}
                            alt="First slide"
                            width={"300"} height={"400"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head3}
                            alt="First slide"
                            width={"300"} height={"400"}
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }
}

export default HeadCarousel;