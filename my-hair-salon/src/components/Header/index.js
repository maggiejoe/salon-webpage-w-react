import React from 'react';
// import { Link } from 'react-router-dom';

import logo from '../../assets/hair-salon-logo.png';

import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {

    return (
        <div className='header-wrapper'>
            <header>
                <Navbar>
                    <Container>
                        <Container>
                            <Nav className='d-flex justify-content-start'>
                                <Nav.Link href='/stylists' className='p-5 header-font fs-5'>Stylists</Nav.Link>
                                <Nav.Link href='/services' className='p-5 header-font fs-5'>Services</Nav.Link>
                                <Nav.Link href='/booking-page' className='p-5 header-font fs-5'>Book</Nav.Link>
                            </Nav>
                        </Container>
                        <Navbar.Brand href='/' className='mx-auto d-flex align-items-center'>
                            <img src={logo} alt='hair-salon-logo' height={'150px'} width={'150px'}></img>
                        </Navbar.Brand>
                        <Container>
                            <Nav className='d-flex justify-content-end'>
                                <Nav.Link href='/gallery' className='p-5 header-font fs-5'>Gallery</Nav.Link>
                                <Nav.Link href='/locations-page' className='p-5 header-font fs-5'>Location</Nav.Link>
                                <Nav.Link href='/contact' className='p-5 header-font fs-5'>Contact</Nav.Link>
                            </Nav>
                        </Container>
                    </Container>
                </Navbar>
            </header >
        </div>
    )
}

export default Header;