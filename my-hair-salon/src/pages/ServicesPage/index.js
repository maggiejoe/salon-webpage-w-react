import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function ServicesPage() {
    return (
        <div className="body-content services-background-img d-flex align-items-center">
            <Container className="">
                <Row className="">
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3 w-100">
                            <h1 className='d-flex justify-content-center fs-3'>Cut's & Washes</h1>
                            <ul className="list-unstyled">
                                <li className="d-flex justify-content-center">Wash, Cut & Style</li>
                                <li className="d-flex justify-content-center">Children Wash, Cut & Style {'('}10 and under{')'}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3 w-100">
                            <h1 className='d-flex justify-content-center fs-3'>Up-do's & Styles</h1>
                            <ul className="list-unstyled">
                                <li className="d-flex justify-content-center">Wash and Blowdry</li>
                                <li className="d-flex justify-content-center">Blow Out & Style</li>
                                <li className="d-flex justify-content-center">Up-do's</li>
                                <li className="d-flex justify-content-center">Children's Up-do's</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3 w-100">
                            <h1 className='d-flex justify-content-center fs-3'>Color & Highlights</h1>
                            <ul className="list-unstyled">
                                <li className="d-flex justify-content-center">Roots & Blowdry</li>
                                <li className="d-flex justify-content-center">Roots, Blowdry & Cut</li>
                                <li className="d-flex justify-content-center">Full & Partial Highlights, Blowdry</li>
                                <li className="d-flex justify-content-center">Full & Partial Balyage</li>
                                <li className="d-flex justify-content-center">Adding Toner</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex col-3">
                        <div className="blurred-container-bg p-3 w-100">
                            <h1 className='d-flex justify-content-center fs-3'>Chemical Treatments</h1>
                            <ul className="list-unstyled">
                                <li className="d-flex justify-content-center">Perm</li>
                                <li className="d-flex justify-content-center">Keratin Treatment</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesPage;