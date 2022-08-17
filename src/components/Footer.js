import React, { Component } from 'react';
import "./Footer.css";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';



export default class Footer extends Component {
    render() {
        return (
            <CDBFooter className="shadow" style={{}}>
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto flex-wrap"
                    style={{ width: '80%', height: '90px' }}
                >
                    <CDBBox m="0px" p="0px" alignItems="center">
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo"
                                src="https://i.postimg.cc/3wZTvrvh/imageedit-9-4209056925.png"
                                width="130px"
                            />
                        </a>
                        <br></br>
                        <p style={{ color: '#4c8389' }}>To inspire hope, and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research.<br></br> Vision Statement: RAIVENY will provide an unparalleled experience as the most trusted partner for health care.<br></br>By following  RAIVENY tips we will go hand by hand to make every one happy and helthy.</p>





                    </CDBBox>
                    <div className='footIcons'>
                        <CDBBox display="flex" >
                            <CDBBtn flat color='dark' className="p-2">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color='dark' className="mx-3 p-2">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color='dark' className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>

                    </div>
                    <div className='footCopyRight'>
                        <p style={{ color: '#4c8389', lineHeight: '5px', fontSize: 'small' }}>All Rights reserved &copy; 2022 by <span style={{ color: '#4c8389' }}>Heros Team</span></p>
                    </div>
                </CDBBox>

            </CDBFooter>
        )
    }
}