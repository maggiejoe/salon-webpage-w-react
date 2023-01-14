import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {

    const bgStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }

    return (
        <div className='landing-page-background'
        style={bgStyles}
        >
            <Container>
                <Row className=''>
                    <Col className="center-container blurred-bg m-5">
                        <h1 className="text-content border rounded">This is a container</h1>
                    </Col>
                    <Col className="center-container blurred-bg m-5">
                        <h1 className="text-content border rounded">This is a container</h1>
                    </Col>
                    <Col className="center-container blurred-bg m-5">
                        <h1 className="text-content border rounded">This is a container</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;