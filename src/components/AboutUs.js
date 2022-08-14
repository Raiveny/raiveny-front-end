import React, { Component } from 'react';
import   './AboutUs.css';




class AboutUs extends Component {
    render() {
        const TeamData = require("./TeamData.json")
        const TeamD=require("./TeamD.json")
        return (
            <>
                 <section className=""> 

                     <article className="">
                        <h1> ABOUT US </h1>
                        <h5>We are, HEROES team, always strive to solve all patients’ problems, and because of what they suffer from, we have built this site to
                            make the user able to know his own disease and the best ways to prevent and treat it </h5 >
                        <div className="">
                            <a className="" href="">CONTACT US</a>
                        </div>
                    </article>

                    <article className="" >
                        <h1>Instructor</h1>
                        <div className='AboutUs_Team_members'>
                        {TeamD.map(item1 =>
                                <>
                                    <div className="AboutUs_container">
                                        <img src={item1.img} className="AboutUs_image"></img>
                                        <div className="AboutUs_overlay">
                                            <div className="AboutUs_text">{item1.name}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <h1>Team members</h1>
                        <div className='AboutUs_Team_members' >
                            {TeamData.map(item =>
                                <>
                                    <div className="AboutUs_container">
                                        <img src={item.img} className="AboutUs_image"></img>
                                        <div className="AboutUs_overlay">
                                            <div className="AboutUs_text">{item.name}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>


                    </article> 

                </section>
            </>
        );
    }
}

export default AboutUs;