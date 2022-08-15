import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class CalCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>You BMI is :  {this.props.BMI}<br />{this.props.BMIMsg} </ListGroup.Item>
                        <ListGroup.Item>Your Ideal Weight is : {this.props.IBW}</ListGroup.Item>
                        <ListGroup.Item>To keep Your Weight you need to take {this.props.BMR} Calories<br />{this.props.WeightMsg}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default CalCard;
