import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import head1 from './assets/head1.jpg'
import head2 from './assets/head2.jpg'
import head3 from './assets/head3.jpg'
import head4 from './assets/head4.jpg'
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
                            width={"300"} height={"300"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head2}
                            alt="First slide"
                            width={"300"} height={"300"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head3}
                            alt="First slide"
                            width={"300"} height={"300"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={head4}
                            alt="First slide"
                            width={"300"} height={"300"}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default HeadCarousel;