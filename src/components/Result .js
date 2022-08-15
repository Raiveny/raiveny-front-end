import React, { Component } from 'react';
import Card from "./Card";


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
                            <Card data ={value} key={index}/>
                             </>
                    })
                }
             
          </div>
        );
    }
}

export default Result;







