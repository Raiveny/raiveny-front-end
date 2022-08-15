import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BasicExample extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
            return (
                <div className='cardClass'>
                <Card style={{ width: '15rem' }} className='cardParent' >
                        <Card.Img  className='cardImg' variant="top" src={(this.props.data.medication_img)?this.props.data.medication_img:`https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`} />

                        <Card.Body className='cardBody' >
                        <Card.Title className='cardTitle' >{(this.props.data!==undefined)?this.props.data.medication_Name:""}</Card.Title>

                            <div className='dosageDiv' >
                                {this.props.data.medication_Dosage.map(v=>    
                                   <Card.Text className='cardText'>
                                              {(v)? v + ".":""}
                                       </Card.Text>
                                      )}
                            </div>
                        </Card.Body>
                       
                        </Card>
                </div>
            );
    }
}

export default BasicExample;

