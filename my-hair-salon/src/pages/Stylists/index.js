import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import headshot from '../../assets/stylist-headshot.jpg';

function Stylists() {
    return (
        <Container className='mb-5'>
            <Row className='mb-5'>
                {/* Stylist 1 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 1' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 2 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 2' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 3 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 3' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 4 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 4' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 5 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 5' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 6 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 6' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 7 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 7' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
                {/* Stylist 8 */}
                <Col className='col-3 mb-4'>
                    <div className="card">
                        <img className='' src={headshot} alt='Stylist 8' />
                        <div className='d-flex justify-content-start'>
                            <Col className='align-items-center'>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Stylists;