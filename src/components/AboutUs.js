import React, { Component } from 'react';
import './AboutUs.css';




class AboutUs extends Component {
    render() {
        const TeamData = require("./TeamData.json")
        const TeamD = require("./TeamD.json")
        return (
            <>
                <section className="">

                    <article className="">
                        <h1 className='AboutUs_h1'> ABOUT US </h1>
                        <h5 className='AboutUs_h5'>We are, HEROES team, always strive to solve all patients’ problems, and because of what they suffer from, we have built this site to
                            make the user able to know his own disease and the best ways to prevent and treat it </h5 >
                    </article>

                    <article className="" >
                        <h1 className='AboutUs_h1'>Instructor</h1>
                        <div className='AboutUs_Team_members'>
                            {TeamD.map((item1, idx1) => {
                                return (<div className="AboutUs_container" key={idx1}>
                                    <img src={item1.img} alt="AboutUs" className="AboutUs_image" ></img>
                                    <div className="AboutUs_overlay">
                                        <div className="AboutUs_text">{item1.name}</div>
                                    </div>
                                </div>)
                            }
                                // <>
                                //     <div className="AboutUs_container" key={idx1}>
                                //         <img src={item1.img} alt="AboutUs" className="AboutUs_image" ></img>
                                //         <div className="AboutUs_overlay">
                                //             <div className="AboutUs_text">{item1.name}</div>
                                //         </div>
                                //     </div>
                                // </>
                            )}
                        </div>
                        <h1 className='AboutUs_h1'> Team members</h1>

                        <div className='AboutUs_Team_members' >
                            {TeamData.map((item, idx) => {
                                return (
                                    <div className="AboutUs_container" key={idx} >
                                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer" >
                                            <img src={`${item.img}`} alt="AboutUs" className="AboutUs_image"></img>
                                            <div className="AboutUs_overlay">
                                                <div className="AboutUs_text">{item.name}</div>
                                            </div>
                                        </a>
                                    </div>

                                )
                            }

                            )}

                            {/* <div className="AboutUs_container">
                                        <a href={item.linkedin} target="_blank" >
                                            <img src={`${item.img}`}alt="AboutUs" className="AboutUs_image"></img>
                                            <div className="AboutUs_overlay">
                                                <div className="AboutUs_text">{item.name}</div>
                                            </div>
                                        </a>
                                    </div> */}

                        </div>


                    </article>

                </section>
            </>
        );
    }
}

export default AboutUs;