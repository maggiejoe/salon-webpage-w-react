import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {

    return (
        <div className='background-img'>
            <Container>
                <Row className=''>
                    <Col className='d-flex justify-content-center mt-4'>
                        <div className='landingPage-ContainerBg p-3 rounded shadow-lg'>
                            <h1 className=''>About Us</h1>
                            <p>
                                Ex aute excepteur aliquip amet esse incididunt nulla eu exercitation quis ullamco ea consequat. Exercitation dolore adipisicing veniam et. Commodo aute reprehenderit cupidatat ex ex voluptate adipisicing dolor eu. Sint sit nisi nulla aliquip culpa do sint. Ut sunt dolore nulla id esse adipisicing est adipisicing occaecat exercitation. Reprehenderit ea est et deserunt ex sunt.
                            </p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='border'>
                            <h1 className=''>Container header</h1>
                            <p>lorem Ipsum</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center mt-5'>
                        <div className='landingPage-ContainerBg p-3 rounded shadow-lg'>
                            <h1 className=''>Our Vision</h1>
                            <p>
                                Ex amet consequat officia elit deserunt sunt. Ut do amet in adipisicing labore aliqua cupidatat fugiat Lorem. Et id qui Lorem aliquip ex enim Lorem adipisicing cupidatat aliquip dolore voluptate adipisicing. Minim nisi culpa pariatur anim et proident cillum pariatur in fugiat pariatur. Officia ex esse tempor magna irure nostrud qui. Incididunt enim occaecat id laboris occaecat dolor in magna occaecat amet nisi nulla duis. Non et ullamco veniam laboris adipisicing aliquip proident dolor.
                            </p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='border'>
                            <h1 className=''>Container header</h1>
                            <p>lorem Ipsum</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;