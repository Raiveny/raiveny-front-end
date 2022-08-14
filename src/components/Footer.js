import React, { Component } from 'react';
import "./Footer.css";
import {
    CDBFooter,
    // CDBFooterLink, 
    CDBBox, CDBBtn, CDBIcon
} from 'cdbreact';



export default class Footer extends Component {
    render() {
        return (
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%', height: '90px' }}
                >
                    <CDBBox alignItems="center">
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo"
                                src="https://i.postimg.cc/3wZTvrvh/imageedit-9-4209056925.png"
                                width="130px"
                            />
                        </a>
                        <p className='copy-footer'>All rights are reserved.Copyright &copy; 2022 BY &nbsp;&nbsp;<u>Heros Team</u></p>
                    </CDBBox>
                    <CDBBox display="flex">
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>
        )
    }
}