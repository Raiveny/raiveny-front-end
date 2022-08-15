import React, { Component } from 'react';
import './HeadCarousel.css';
class HeadCarousel extends Component {
    render() {
        return (
            <div>
                <section className="hero">

                    <article className="hero-info">
                        <h1 className="hero-h1">Why <span className='headerLogo'>raiveny</span> ?</h1>
                        <p className="hero-p">Because health is one of the most important things in life, you should follow reiveny.com</p>
                        <div className="article-buttom">
                       
                        </div>
                    </article>

                    <article className="hero-img" >
                    <img src='https://i.postimg.cc/k5FJVqQd/imageedit-15-4731593162.png'></img>
                    </article>

                </section>
            </div>
        );
    }
}

export default HeadCarousel;