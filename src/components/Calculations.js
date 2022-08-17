import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CalCard from './CalCard';
import './Calculations.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image from './assets/health/img2.jpg';
import Underweight from './assets/health/underweight.png';
import Normal from './assets/health/normal.png';
import Overweight from './assets/health/overweight.png';
import Obese from './assets/health/obese.png';
import BMIDefault from './assets/health/BMI.jpg';




class Calculations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BMI: 0, //Body mass index
            BMIMsg: "",
            BMR: 0, //Basal metabolic rate
            BMRMsg: "",
            IBW: 0, //Ideal Body Wait
            WeightMsg: "",
            IsCard: false,
            BmiImg: BMIDefault
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.CalBMI(e.target.Weight.value, e.target.Height.value)
        this.CalBMR(e.target.Gender.value, e.target.Weight.value, e.target.Height.value, e.target.Age.value, e.target.Active.value)
        this.CalIBW(e.target.Gender.value, e.target.Weight.value, e.target.Height.value)
        this.setState({
            IsCard: true
        })
    }

    CalBMI = (Weight, Height) => {
        console.log(Weight + "  " + Height);
        Height = Height / 100;
        const tempBMI = Math.round(((Weight / Math.pow(Height, 2)) + Number.EPSILON) * 100) / 100
        let tempBMIMsg = "";
        let tempWeightMsg = "";
        let tempImg = ""
        switch (true) {
            case (tempBMI < 18.5):
                tempBMIMsg = "- you're in the underweight range";
                tempWeightMsg = "- You Adviced to eat MORE about 500 CAL  to reach the Ideal Weight ";
                tempImg = Underweight;
                break;
            case (tempBMI >= 18.5 && tempBMI < 24.9):
                tempBMIMsg = "- you're in the healthy weight range";
                tempImg = Normal;
                break;
            case (tempBMI >= 24.9 && tempBMI < 29.9):
                tempBMIMsg = "- you're in the overweight range";
                tempWeightMsg = "- You Adviced to eat LESS about 500 CAL  to reach the Ideal Weight "
                tempImg = Overweight;
                break;
            case (tempBMI >= 29.9):
                tempBMIMsg = "- you're in the obese range";
                tempWeightMsg = "- You Adviced to eat LESS about 500 CAL  to reach the Ideal Weight "
                tempImg = Obese;

                break;
        }
        this.setState(
            {
                BMI: tempBMI,
                BMIMsg: tempBMIMsg,
                WeightMsg: tempWeightMsg,
                BmiImg: tempImg
            }
        )
    }

    CalBMR = (Gender, Weight, Height, Age, Active) => {
        console.log(Gender + "  " + Weight + "  " + Height);
        let tempBMR = 0
        if (Gender === "M") {
            tempBMR = (88.362 + (13.397 * Weight) + (4.799 * Height) - (5.677 * Age)) * Active
        }
        if (Gender === "F") {
            tempBMR = (444.593 + (9.247 * Weight) + (3.098 * Height) - (4.33 * Age)) * Active
        }
        tempBMR = Math.round((tempBMR + Number.EPSILON) * 100) / 100
        this.setState({
            BMR: tempBMR
        })
        console.log(tempBMR + " BMR= " + this.state.BMR);
    }

    CalIBW = (Gender, Weight, Height) => {
        console.log(Gender + "  " + Weight + "  " + Height);
        let tempIBW = 0
        if (Gender === "M") {
            tempIBW = 50 + (0.91 * (Height - 152.4))
        }
        if (Gender === "F") {
            tempIBW = 45.5 + (0.91 * (Height - 152.4))
        }
        tempIBW = Math.round((tempIBW + Number.EPSILON) * 100) / 100
        this.setState({
            IBW: tempIBW
        })
        console.log(tempIBW + " IBW= " + this.state.IBW);
    }

    render() {
        return (
            <>
                <img className='img-cal' width='100%' height='450' src={image} />

                <div className='container1' >
                    <h3 className='cal-h3'> Enter Your Information </h3>
                    <div className='content1'>
                        <div className='left-side1'>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" >
                                    {/* <Form.Label className='calLbl'>Enter You Weight</Form.Label> */}
                                    <Form.Control type='Number' required id="Weight" placeholder="Enter You Weight" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Weight.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    {/* <Form.Label className='calLbl'>Enter Your Height</Form.Label> */}
                                    <Form.Control type='Number' required id="Height" placeholder="Enter Your Height" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Height.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    {/* <Form.Label className='calLbl'>Enter Your Age</Form.Label> */}
                                    <Form.Control type='Number' required id="Age" placeholder="Enter Your Age" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Age.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label className='calLbl'>How Active Are You?</Form.Label>
                                    <Form.Select id="Active" >
                                        {/* <Form.Control required  placeholder="Enter Your Active  level" /> */}
                                        <option disabled defaultChecked value="">Enter Your Active level</option>
                                        <option value="1.2">Sedentary</option>
                                        <option value="1.375">Lightly active</option>
                                        <option value="1.55">Moderately active </option>
                                        <option value="1.725">Active</option>
                                        <option value="1.9">Very active </option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label className='calLbl'> Enter Your Gender</Form.Label>
                                    <Form.Select id="Gender">
                                    <option disabled defaultChecked value="">Enter Your Gender</option>

                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" type="submit" className='btm-cal'>
                                    Calculate
                                </Button>
                            </Form>
                        </div>                    {/* left-side */}
                        {
                            // this.state.IsCard &&
                            <div className="right-side1" >
                                <Card className='CalCard' >
                                    <Card.Img variant="top" src={this.state.BmiImg} style={{width: '320px' , height :'320px', marginLeft : 'auto', marginRight : 'auto'}} />
                                    <Card.Body>
                                        <Card.Title>Your Result</Card.Title>
                                    </Card.Body>
                                    <ListGroup variant="flush" className='listgroup'>
                                        <ListGroup.Item>- Your BMI is :  {this.state.BMI}<br />{this.state.BMIMsg} </ListGroup.Item>
                                        <ListGroup.Item>- Your Ideal Weight is : {this.state.IBW}</ListGroup.Item>
                                        <ListGroup.Item>- To keep Your Weight you need to take {this.state.BMR} Calories<br />{this.state.WeightMsg}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                                {/* <CalCard BMI={this.state.BMI} BMR={this.state.BMR} IBW={this.state.IBW} WeightMsg={this.state.WeightMsg} BMIMsg={this.state.BMIMsg} BmiImg={this.state.BmiImg} /> */}

                            </div>}                        {/* right-side */}


                    </div>
                </div>                            {/* container */}
            </>
        );
    }
}

export default Calculations;
