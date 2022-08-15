import React, { Component } from 'react'
import './TeamCard.css';

export class TeamCard extends Component {
    render() {
        return (
            <div>
                <div className='teamCard'>
                    <img src={this.props.pic} />
                    <hr></hr>
                    <h5>{this.props.name}</h5>
                    <a href={this.props.links}>Contact Info </a>
                    
                </div>
            </div>
        )
    }
}

export default TeamCard
