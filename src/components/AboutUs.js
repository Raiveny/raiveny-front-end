import React, { Component } from 'react';
import './AboutUs.css';
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';







class AboutUs extends Component {
    render() {
        const TeamData = require("./TeamData.json")
        return (
            <>
                <section className="">

                    <article className="">
                        <h1 className='AboutUs_h1'> ABOUT US </h1>
                       <div className='AboutUs-div'>
                       <h5 className='AboutUs_h5'>We are, HEROES team, always strive to solve all patients’ problems, and because of what they suffer from, we have built this site to
                            make the user able to know his own disease and the best ways to prevent and treat it </h5 >
                       </div>
                    </article>

                    <IconContext.Provider value={{ color:"black" ,size :"1.8em"}} >

                        <h1 className='AboutUs_h1'> Team members</h1>
                        <div className='row'>
                            {TeamData.map(item =>
                                <div className="column">
                                    <div className="card">
                                        <img src={item.img} className="img"></img>
                                        <div className="name">{item.name}</div>
                                        <hr />
                                        <div className="title">Full Stack Developer</div>
                                        <div className="icon">
                                            <a href={item.github} className='a' target="_blank"><FaGithub /></a>
                                            <a href={item.linkedin} className='a' target="_blank"><AiFillLinkedin /></a>
                                            <a href={item.linkedin} className='a' target="_blank"><AiFillTwitterCircle /></a>

                                        </div>

                                    </div>
                                </div>

                            )}

                        </div>

                    </IconContext.Provider>


                </section>
            </>
        );
    }
}

export default AboutUs;