import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormMain.css';
import Spinner from 'react-bootstrap/Spinner';
import Card from './Card'




class FormMain extends Component {

    constructor(props){
        super(props)
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit=(event)=>{
        this.props.searchbtn(this.state.value);
    
        event.preventDefault();
      }
    render() {
        return (
            <div>


                <Form onSubmit={this.handleSubmit} className='form-search' >
                    <Form.Group className="mb-3">
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control  onChange={this.handleChange} type="text" value={this.state.value} id="name" placeholder="Enter asymptom ..." required className='form-Control' />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='form-button'>
                     {
                        this.props.getFalg &&
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                         />
                     }   
                    Send 
                    </Button>

                </Form>
            </div>
        );
    }
}

export default FormMain;