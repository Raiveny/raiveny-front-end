import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormMain.css';
import Spinner from 'react-bootstrap/Spinner';
import rightMain from './assets/main.png'
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
            <div className='ParentDivForm'>
            <div className='DivFormLift'>
                <Form onSubmit={this.handleSubmit} className='form-search' >
                    <Form.Group className="mb-3">
                        {/* <Form.Label>Full Name</Form.Label> */}
                        <Form.Control  onChange={this.handleChange} type="text" value={this.state.value} id="name" placeholder="Search asymptom ..." required className='form-Control' />
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
                    Search 
                    </Button>
                    </Form.Group>
                </Form>
            </div>
                    <div className='DivFormRight'>
                    <img
                            src={rightMain}
                            alt="mainirght"
                            className='mainImg'
                            width={"135"} height={"70"}
                        />

                    </div>
            </div>
        );
    }
}

export default FormMain;