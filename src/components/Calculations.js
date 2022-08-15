import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CalCard from './CalCard';
import './Calculations.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
            IsCard: false
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
        switch (true) {
            case (tempBMI < 18.5):
                tempBMIMsg = "- you're in the underweight range";
                tempWeightMsg = "- You Adviced to eat MORE about 500 CAL  to reach the Ideal Weight "
                break;
            case (tempBMI >= 18.5 && tempBMI < 24.9):
                tempBMIMsg = "- you're in the healthy weight range";
                break;
            case (tempBMI >= 24.9 && tempBMI < 29.9):
                tempBMIMsg = "- you're in the overweight range";
                tempWeightMsg = "- You Adviced to eat LESS about 500 CAL  to reach the Ideal Weight "
                break;
            case (tempBMI >= 29.9):
                tempBMIMsg = "- you're in the obese range";
                tempWeightMsg = "- You Adviced to eat LESS about 500 CAL  to reach the Ideal Weight "
                break;
        }
        this.setState(
            {
                BMI: tempBMI,
                BMIMsg: tempBMIMsg,
                WeightMsg: tempWeightMsg
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
            <div className='container' >
                <h3> Enter Your Information </h3>
                <div className='content'>
                    {
                        // this.state.IsCard &&
                        <div className="left-side " >
                            <Card  className='Card' >
                                <ListGroup variant="flush" className='listgroup'>
                                    <ListGroup.Item>- Your BMI is :  {this.state.BMI}<br />{this.state.BMIMsg} </ListGroup.Item>
                                    <ListGroup.Item>- Your Ideal Weight is : {this.state.IBW}</ListGroup.Item>
                                    <ListGroup.Item>- To keep Your Weight you need to take {this.state.BMR} Calories<br />{this.state.WeightMsg}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            {/* <CalCard BMI={this.state.BMI} BMR={this.state.BMR} IBW={this.state.IBW} WeightMsg={this.state.WeightMsg} BMIMsg={this.state.BMIMsg} /> */}

                        </div>}                        {/* left-side */}
                    <div className='right-side'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Enter You Weight</Form.Label>
                                <Form.Control type='Number' required id="Weight" placeholder="Enter You Weight" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Weight.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                {/* <Form.Label>Enter Your Height</Form.Label> */}
                                <Form.Control type='Number' required id="Height" placeholder="Enter Your Height" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Height.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {/* <Form.Label>Enter Your Age</Form.Label> */}
                                <Form.Control type='Number' required id="Age" placeholder="Enter Your Age" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Age.
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {/* <Form.Label>How Active Are You?</Form.Label> */}
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
                                {/* <Form.Label>Enter Your Gender</Form.Label> */}
                                <Form.Select id="Gender">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Calculate
                            </Button>
                        </Form>
                    </div>                    {/* right-side */}


                </div>                 {/* content */}
            </div>            // container
        );
    }
}

export default Calculations;
