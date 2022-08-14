import React, { Component } from 'react';


class Result extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

            
            this.props.data &&
            <div className='containerCard'>
                <h1>{(this.props.data)?this.props.data.Name:""}</h1>              
                {
                    this.props.data.medication.map((value,index)=>{
                       return <>
                        <h2>{(value!==undefined)?value.medication_Name:""}</h2>
                        <p>{(this.props.data)? `Dosage: `+value.medication_Dosage:""}</p>
                        <img src={(value.medication_img)?value.medication_img:`https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`} />
                        </>
                    })
                }
             
          </div>
        );
    }
}

export default Result;