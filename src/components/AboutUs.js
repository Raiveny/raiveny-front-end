import React, { Component } from 'react';
import './AboutUs.css';
import TeamData from './TeamData.json';
import TeamCard from './TeamCard';

class AboutUs extends Component {
    render() {
        
       
        return (
            <>
                <section className="">

                    <article className="">
                        <h1 className='AboutUs_h1'> ABOUT US </h1>
                        <h5 className='AboutUs_h5'>We are, HEROES team, always strive to solve all patients’ problems, and because of what they suffer from, we have built this site to
                            make the user able to know his own disease and the best ways to prevent and treat it </h5 >
                    </article>

                    <article className="" >
                       
                        <h1 className='AboutUs_h1'> Team members</h1>

                        <div className='AboutUs_Team_members' >
                        {TeamData.map(item => <TeamCard name={item.name} pic={item.img} links={item.links}/>)}
                        </div>


                    </article>

                </section>
            </>
        );
    }
}

export default AboutUs;