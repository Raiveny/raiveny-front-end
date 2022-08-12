import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './ContactUsCSS.css';
import ContactUsImg from  '/home/eman/301course/midproject/raiveny-front-end/src/components/assets/ContactUsImg.jpg'
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
</style> */}
class ContactUs extends Component {
    render() {
        return (
            <div className='container'>
                <title> Contact Us</title>
                <div className='container-img_form'>
                    <div className='img'> <img src={ContactUsImg} alt=''/></div>
                    <div className='form'>
                        <h2> Contact Us</h2>
                              <p> Send a message and we will get back to you within 24 hours</p>

                        <Form>
                            <Form.Group className="mb-3">
                                {/* <Form.Label>Full Name</Form.Label> */}
                                <Form.Control type="text" id="name" placeholder="Enter your name ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="email" id="email" placeholder="Enter your email ..." />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                {/* <Form.Label>Subject</Form.Label> */}
                                <Form.Control type="text" id="subject" placeholder="Subject" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                {/* <Form.Label>Message</Form.Label> */}

                                <textarea name="message" rows="5" cols="30" placeholder='Write here ...'></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Male" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Female" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                            <Button variant="primary" type="submit">
                                Reset
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;