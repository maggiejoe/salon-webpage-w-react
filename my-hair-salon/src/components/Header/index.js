import React from 'react';

import logo from '../../assets/hair-salon-logo.png';

import { Navbar, Container, Row, Col } from 'react-bootstrap';

function Header() {

    return (
        <header>
            <Navbar>
                <Container>
                    <Container>
                        <Row>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>About</h1>
                            </Col>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>Stylists</h1>
                            </Col>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>Book</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Navbar.Brand href='/' className='mx-auto d-flex align-items-center'>
                        <img src={logo} alt='hair-salon-logo' height={'150px'} width={'150px'}></img>
                    </Navbar.Brand>
                    <Container>
                        <Row>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>Location</h1>
                            </Col>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>Services</h1>
                            </Col>
                            <Col className='p-5'>
                                <h1 className='header-font fs-5'>Gallery</h1>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Navbar>

        </header >
    )
}

export default Header;