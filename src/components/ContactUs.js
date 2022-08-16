import React, { Component } from 'react';

import './ContactUsCSS.css';
import emailjs from 'emailjs-com'
import 'font-awesome/css/font-awesome.min.css';

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
            <>
                <div className='background'>
                    <img className='img-contact' width='1700' height='350' src='https://absolute-shopping.com/wp-content/uploads/2019/05/contactus.jpg' />
                    <div className='container'>
                        <h1> Contact us </h1>
                        <div className='content'>
                            <div className='left-side' >
                                <div className='address details' >
                                    <i className="fas fa-map-marker-alt" > </i>
                                    <div className='topic'>Address</div>
                                    <div className='text-one'> Irbid, Jordan</div>
                                    <div className='text-two'> LTUC </div>
                                </div>
                                <div className="Phone details">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className='topic'>Phone</div>
                                    <div className='text-one'>+962789058158 </div>
                                    <div className='text-two'>+962787505333 </div>
                                </div>
                                <div className="email details">
                                    <i className="fas fa-envelope"></i>
                                    <div className='topic'>Email</div>
                                    <div className='text-one'>team301project@gmail.com</div>

                                </div>

                            </div>

                            <div className='right-side'>
                                <div className='topic-text' >Send us a message</div>
                                <p> Send a message and we will get back to you within 24 hours</p>
                                <form onSubmit={sendEmail} action='#' >
                                    <div className='input-box'>
                                        <input type="text" placeholder='Enter Your Name' ></input>
                                    </div>
                                    <div className='input-box'>
                                        <input type="text" placeholder='Enter Your Email' ></input>
                                    </div>
                                    <div className='input-box message-box'>
                                        <textarea></textarea>
                                    </div>
                                    <div className='input-box'>
                                        <input type="submit" value={"send"} className='send-box' />
                                    </div>



                                </form>

                            </div>
                        </div>

                    </div>
                </div>

                <h1 className='contact-h1'> Contact Us
                    Get in touch with us if you have any questions
                    about our service and we will be happy to help you.</h1>
            </>
        );
    }
}

export default ContactUs;