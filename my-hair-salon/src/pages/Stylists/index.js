import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import headshot from '../../assets/stylist-headshot.jpg';

function Stylists() {
    return (
        <div className='stylist-background-img d-flex align-items-center'>
            <Container className='mt-4'>
                <Row className=''>
                    {/* Stylist 1 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 1' />

                        </Card>
                    </Col>
                    {/* Stylist 2 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 2' />

                        </Card>
                    </Col>
                    {/* Stylist 3 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 3' />

                        </Card>
                    </Col>
                    {/* Stylist 4 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 4' />

                        </Card>
                    </Col>
                    {/* Stylist 5 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 5' />

                        </Card>
                    </Col>
                    {/* Stylist 6 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 6' />

                        </Card>
                    </Col>
                    {/* Stylist 7 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 7' />

                        </Card>
                    </Col>
                    {/* Stylist 8 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={headshot} alt='Stylist 8' />

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Stylists;