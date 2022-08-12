import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Auth from './Auth';
import HeadCarousel from './HeadCarousel';

class Header extends React.Component {
    render() {
        return (<>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Raiveny</Navbar.Brand>
                <NavItem><Link to="/" className="nav-link" style={{ color: "white" }}>  Home </Link></NavItem>
                {this.props.isAuthenticated && <>
                    <NavItem><Link to="/History" className="nav-link" style={{ color: "white" }}>  Your History  </Link></NavItem>
                </>
                }
                <NavItem><Link to="/ContactUs" className="nav-link" style={{ color: "white" }}>  Contact Us  </Link></NavItem>
                <NavItem><Link to="/AboutUs" className="nav-link" style={{ color: "white" }}>  About Us </Link></NavItem>
                <br />
                <Auth className={'Auth'} />
            </Navbar>

        </>

        )
    }
}

export default Header;
