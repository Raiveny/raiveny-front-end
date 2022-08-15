import React from 'react';
import Card from 'react-bootstrap/Card';

class BodyShorthandExample extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className='titleCardHeaderDiv'>
        <Card body className='titleCardHeader'>{(this.props.data)?  `It is possible that you are sick with` + this.props.data.Name:""}</Card>
        </div>
        )
              
    }
}

export default BodyShorthandExample;