import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function ServicesPage() {
    return (
        <div className="body-content services-background-img d-flex align-items-center">
            <Container className="">
                <Row className="">
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3">
                            <h1 className='d-flex justify-content-center fs-3'>Cut's & Washes</h1>
                            <ul className="text-decoration-none">
                                <li>Wash, Cut & Style</li>
                                <li>Children Wash, Cut & style {'('}10 and under{')'}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3">
                            <h1 className='d-flex justify-content-center fs-3'>Up-do's & Styles</h1>
                            <ul>
                                <li>Wash and Blowdry</li>
                                <li>Blow Out & Style</li>
                                <li>Up-do's</li>
                                <li>Children's Up-do's</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3">
                            <h1 className='d-flex justify-content-center fs-3'>Color & Highlights</h1>
                            <ul>
                                <li>Roots & Blowdry</li>
                                <li>Roots, Blowdry & Cut</li>
                                <li>Full & Partial Highlights, Blowdry, Cut</li>
                                <li>Full & Partial Balyage</li>
                                <li>Adding Toner</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3">
                            <h1 className='d-flex justify-content-center fs-3'>Chemical Treatments</h1>
                            <ul>
                                <li>Perm</li>
                                <li>Keratin Treatment</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesPage;