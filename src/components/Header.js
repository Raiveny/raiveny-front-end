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
                <Navbar expand="md" style={{ backgroundColor: '#E2FCFF' }}>
                    <Navbar.Brand className="NavBrand"
                    // href="/"
                    >  <img
                            src={image}
                            alt="logo"
                            width={"135"} height={"70"}
                        /></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem ><Link to="/" className="nav-link" style={{ color: '#4c8389' }} >  Home </Link></NavItem>
                            <NavItem ><Link to="/ContactUs" className="nav-link"  style={{ color: '#4c8389' }} >  Contact Us  </Link></NavItem>
                            <NavItem ><Link to="/AboutUs" className="nav-link" style={{ color: '#4c8389' }} >  About Us </Link></NavItem>
                            <NavItem ><Link to="/Calculations" className="nav-link" style={{ color: '#4c8389' }} >  Health Calculator </Link></NavItem>
                            <br />
                            {this.props.isAuthenticated && <>
                                <NavItem className='HistoryHeader' ><Link style={{ color: '#4c8389' }}  to="/History" className="nav-link" >  {user.name} History  </Link></NavItem>
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