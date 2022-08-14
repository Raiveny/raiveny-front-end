import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Auth from './Auth';
import { withAuth0 } from '@auth0/auth0-react';
import image from './assets/Logo/Nav-Logo.png'
import HeadCarousel from './HeadCarousel';
class Header extends React.Component {
    render() {
        const { user } = this.props.auth0;

        return (
            <>
                <Navbar expand="md" style={{ backgroundColor: "#fff" }}>
                    <Navbar.Brand className="NavBrand" 
                    // href="/"
                    >  <img
                        src={image}
                        alt="logo"
                        width={"135"} height={"70"}
                    /></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem style={{ color: "black" }}><Link to="/" className="nav-link" >  Home </Link></NavItem>
                            <NavItem style={{ color: "black" }}><Link to="/ContactUs" className="nav-link" >  Contact Us  </Link></NavItem>
                            <NavItem style={{ color: "black" }}><Link to="/AboutUs" className="nav-link" >  About Us </Link></NavItem>
                            <br />
                            {this.props.isAuthenticated && <>
                                <NavItem className='HistoryHeader' style={{ color: "black" }}><Link to="/History" className="nav-link" >  {user.name} History  </Link></NavItem>
                            </>}
                            <Auth className={'Auth'} />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header);