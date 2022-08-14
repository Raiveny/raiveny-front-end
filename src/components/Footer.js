import React, { Component } from 'react';
import "./Footer.css";
import logo from './assets/Nav-Logo.png'
export default class Footer extends Component{
    render(){
        return (
            <footer className='foot'>
                <div className='all-div-footer-css'>
                    <div className='image-footer-logo'>
                        <img src={logo} className='image-logo' alt='mage not found' />
                    </div>
                    <div className='footer-descriptions'>
                        <p className='copy-footer'>All rights are reserved.Copyright &copy; 2022 by <u>Heros Team</u></p>
                    </div>
                </div>
            </footer>
        )
    }
}