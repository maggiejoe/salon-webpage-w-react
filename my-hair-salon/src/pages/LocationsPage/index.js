import React from 'react';

import Map from '../../components/Map'

import { Container, Row, Col } from 'react-bootstrap';

function LocationsPage() {
    return (
        <div className='body-content'>
            <Container>
                <Row>
                    <Col className=''>
                        <Row className='m-3'>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                        </Row>
                        <Row className='m-3'>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                        </Row>
                        <Row className='m-3'>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                        </Row>
                        <Row className='m-3'>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                            <Col className='border m-3 p-2 rounded shadow'>
                                <h1 className='fs-4'>Windsor West</h1>
                                <h3 className='fs-6'>Address</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Map />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LocationsPage;