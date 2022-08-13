import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './ContactUsCSS.css';
import ContactUsImg from  './assets/ContactUsImg.jpg'
import emailjs from 'emailjs-com'

// import '/home/fatimakh/mid-project-301/raiveny-front-end/src/App.css';
// import Test from './components/test';
 class ContactUs extends Component {
    render() {
        function sendEmail(e) {
            e.preventDefault() // prevents the default behaviour of the form
            
            emailjs.sendForm('gmail', 'template_u8xmz7r', 
           e.target, 'oXDGlQ6ZHy4kwz4DD')
              .then((result) => {
                    console.log(result.text);
                }, 
                 (error) => {
                    console.log(error.text);
                 });
            }
        return (
            <div className='container'>
                <h1> Contact Us </h1>
                {/* <title className='contactus_title'> Contact Us</title> */}
                <div className='container-img_form'>
                    <div className='img'> <img src={ContactUsImg} alt='' width="450" height="500" /></div>
                    <div className='form'>

                        <Form   onSubmit={sendEmail}>
                               <p> Send a message and we will get back to you within 24 hours</p>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
<br/>
                                <Form.Control type="text" id="name" placeholder="Enter your name ..." />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <br/>

                                <Form.Control type="email" id="email" placeholder="Enter your email ..." />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Subject</Form.Label>
                                <br/>

                                <Form.Control type="text" id="subject" placeholder="Subject" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <br/>

                                <textarea name="message" rows="5" cols="50" placeholder='Write here ...'></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Male" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Female" />
                            </Form.Group>
                            <div className='send-rest-contract-us-buttons'>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                            <Button variant="primary" type="submit">
                                Reset
                            </Button></div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;