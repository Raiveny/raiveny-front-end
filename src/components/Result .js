import React, { Component } from 'react';
import CardHeader from './CardHeader';
import Card from "./Card";


class Result extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

         
            this.props.data &&
            <div className='containerCard'>
                
                  {
                this.props.data&&
                <CardHeader data = {this.props.data}/>          
                  }
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







