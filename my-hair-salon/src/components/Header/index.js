import React from 'react';
// import { Link } from 'react-router-dom';

import logo from '../../assets/hair-salon-logo.png';

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function Header() {

    return (
        <header>
            <Navbar>
                <Container>
                    <Container>
                        <Row>
                            <Col className='p-5'>
                                <Nav.Link className='header-font fs-5'>About</Nav.Link>
                            </Col>
                            <Col className='p-5'>
                                <Nav.Link className='header-font fs-5'>Stylists</Nav.Link>
                            </Col>
                            <Col className='p-5'>
                                <Nav.Link href='/booking-page' className='header-font fs-5'>Book</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                    <Navbar.Brand href='/' className='mx-auto d-flex align-items-center'>
                        <img src={logo} alt='hair-salon-logo' height={'150px'} width={'150px'}></img>
                    </Navbar.Brand>
                    <Container>
                        <Row>
                            <Col className='p-5'>
                                <Nav.Link href='/locations-page' className='header-font fs-5'>Location</Nav.Link>
                            </Col>
                            <Col className='p-5'>
                                <Nav.Link className='header-font fs-5'>Services</Nav.Link>
                            </Col>
                            <Col className='p-5'>
                                <Nav.Link className='header-font fs-5'>Gallery</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Navbar>

        </header >
    )
}

export default Header;