import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Auth from './Auth';
import { withAuth0 } from '@auth0/auth0-react';
import image from './assets/Logo/Nav-Logo.png'
class Header extends React.Component {
    render() {
        const { user } = this.props.auth0;

        return (
            <>
                <Navbar expand="md" style={{ backgroundColor: '#E2FCFF' }} className='nav' >
                    <Navbar.Brand className="NavBrand"
                    // href="/"
                    >  <img
                            src={image}
                            alt="logo"
                            width={"135"} height={"70"}
                        /></Navbar.Brand>
                    <Navbar.Collapse className='basic-navbar-nav'>
                        <Nav className="mr-auto">
                            <NavItem ><Link to="/" className="nav-link" style={{ color: '#4c8389'  }} >  HOME </Link></NavItem>
                            <NavItem ><Link to="/ContactUs" className="nav-link"  style={{ color: '#4c8389' }} >  CONTACT US  </Link></NavItem>
                            <NavItem ><Link to="/AboutUs" className="nav-link" style={{ color: '#4c8389' }} >  ABOUT </Link></NavItem>
                            <NavItem ><Link to="/Calculations" className="nav-link" style={{ color: '#4c8389' }} > HEALTH CALCULATOR</Link></NavItem>
                            <br />
                            {this.props.isAuthenticated && <>
                                <NavItem className='HistoryHeader' ><Link style={{ color: '#4c8389' }}  to="/History" className="nav-link" > <img src={user.picture} style={{ width : '32px' , borderRadius:'50%'}}  ></img> &nbsp;	&nbsp; {user.name} HISTORY  </Link></NavItem>
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