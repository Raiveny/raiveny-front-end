import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsCSS.css';

class FormMain extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control type="text" id="name" placeholder="Enter asymptom ..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>

                </Form>
            </div>
        );
    }
}

export default FormMain;