import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form_main extends Component {
    render() {
        return (
            <div>
                <Form>
                            <Form.Group className="mb-3">
                                {/* <Form.Label>Full Name</Form.Label> */}
                                <Form.Control type="text" id="name" placeholder="Enter asymptom ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="email" id="email" placeholder="Enter your age ..." />
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
                           
                        </Form>
            </div>
        );
    }
}

export default Form_main;