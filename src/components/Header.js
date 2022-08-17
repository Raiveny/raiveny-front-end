import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import image from './assets/Logo/Nav-Logo.png'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
    render() {
        const { user } = this.props.auth0;

        return (
            <>
                <Navbar collapseOnSelect expand="sm" style={{ backgroundColor: "#E2fcff" }}>
                    <Navbar.Brand >
                        <img
                            src={image}
                            alt="logo"
                            width={"135"} height={"45"}
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavItem ><Link to="/" className="nav-link" >  Home </Link></NavItem>
                            <NavItem ><Link to="/Calculations" className="nav-link" >  Health Calculator </Link></NavItem>
                            <NavItem ><Link to="/ContactUs" className="nav-link" >  Contact us  </Link></NavItem>
                            <NavItem ><Link to="/AboutUs" className="nav-link" >  About us </Link></NavItem>
                        </Nav>
                            <Nav className="me-auto2">
                                {this.props.isAuthenticated &&
                                    <>
                                        <NavItem ><Link to="/History" className="nav-link2 , HistoryHeader"> History </Link></NavItem>
                                        <NavItem >
                                            <Link to="/History" className="nav-link2">
                                                <img
                                                    src={user.picture}
                                                    alt="user"
                                                    className='imgUser'
                                                />
                                                {" " + user.name.substring(0, user.name.indexOf(' '))}  </Link>

                                        </NavItem>
                                        <NavItem > <LogoutButton /> </NavItem>
                                    </>
                                }
                                {!this.props.isAuthenticated && <>

                                    <NavItem > <LoginButton /> </NavItem>
                                </>
                                }
                            </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header);