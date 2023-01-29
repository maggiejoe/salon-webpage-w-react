import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function ServicesPage() {
    return (
        <div className="body-content services-background-img d-flex align-items-center">
            <Container className="">
                <Row className="d-flex">
                    <Col className="">
                        <div className="blurred-container-bg">
                            <h1 className="d-flex justify-content-center">Hair Services</h1>
                            <h2 className='fs-4'>Cut's & Washes</h2>
                            <ul>
                                <li>Wash, Cut & Style</li>
                                <li>Children Wash, Cut & style {'('}10 and under{')'}</li>
                            </ul>
                            <h2 className='fs-4'>Up-do's & Styles</h2>
                            <ul>
                                <li>Wash and Blowdry</li>
                                <li>Blow Out & Style</li>
                                <li>Up-do's</li>
                                <li>Children's Up-do's</li>
                            </ul>
                            <h2 className='fs-4'>Color & Highlights</h2>
                            <ul>
                                <li>Roots & Blowdry</li>
                                <li>Roots, Blowdry & Cut</li>
                                <li>Full & Partial Highlights, Blowdry, Cut</li>
                                <li>Full & Partial Balyage</li>
                                <li>Adding Toner</li>
                            </ul>
                            <h2 className='fs-4'>Chemical Treatments</h2>
                            <ul>
                                <li>Perm</li>
                                <li>Keratin Treatment</li>
                            </ul>
                            <h2 className='fs-4'>Extentions</h2>
                            <ul>
                                <li>Contact for Pricing</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="blurred-container-bg d-flex justify-content-center">
                            <h1>Skincare Services</h1>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="blurred-container-bg d-flex justify-content-center">
                            <h1>Waxing</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesPage;