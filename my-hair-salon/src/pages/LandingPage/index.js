import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPage() {

    return (
        <div className='background-img'>
            <Container className='d-flex flex-wrap'>
                <Col className='d-flex flex-wrap justify-content-start m-0'>
                    <Row className='d-flex mt-5'>
                        <div className='landingPage-ContainerBg p-3 rounded shadow-lg'>
                            <h1 className=''>About Us</h1>
                            <p>
                                Ex aute excepteur aliquip amet esse incididunt nulla eu exercitation quis ullamco ea consequat. Exercitation dolore adipisicing veniam et. Commodo aute reprehenderit cupidatat ex ex voluptate adipisicing dolor eu. Sint sit nisi nulla aliquip culpa do sint. Ut sunt dolore nulla id esse adipisicing est adipisicing occaecat exercitation. Reprehenderit ea est et deserunt ex sunt.
                            </p>
                        </div>
                    </Row>
                    <Row className='d-flex mt-5'>
                        <div className='landingPage-ContainerBg p-3 rounded shadow-lg'>
                            <h1 className=''>Our Vision</h1>
                            <p>
                                Ex amet consequat officia elit deserunt sunt. Ut do amet in adipisicing labore aliqua cupidatat fugiat Lorem. Et id qui Lorem aliquip ex enim Lorem adipisicing cupidatat aliquip dolore voluptate adipisicing. Minim nisi culpa pariatur anim et proident cillum pariatur in fugiat pariatur. Officia ex esse tempor magna irure nostrud qui. Incididunt enim occaecat id laboris occaecat dolor in magna occaecat amet nisi nulla duis. Non et ullamco veniam laboris adipisicing aliquip proident dolor.
                            </p>
                        </div>
                    </Row>
                </Col>
                <Col className='d-flex flex-wrap justify-content-end m-0 mt-5 col-5'>
                    <div className='landingPage-ContainerBg  p-3 rounded shadow-lg'>
                        <h1 className=''>Placeholder title</h1>
                        <p>
                            lorem ipsum
                        </p>
                        <p>
                            lorem ipsum
                        </p>
                        <p>
                            lorem ipsum
                        </p>
                        <p>
                            lorem ipsum
                        </p>
                        <p>
                            lorem ipsum
                        </p>

                        <Button className='d-flex justify-content-center'>
                            Book Now!
                        </Button>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default LandingPage;