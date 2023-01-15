import React from 'react';

import { Container, Row } from 'react-bootstrap';

function LandingPage() {

    const bgStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100'
    }

    const containerStyles = {
        height: '100vh',
        overflow: 'hidden'
    }

    return (
        <div>
            <div className='background-img p-0 m-0' style={bgStyles}>
                <Container>
                    <Row>
                        <h1 className='m-0 p-0 d-flex justify-content-center align-items-center' style={containerStyles}>Container Header</h1>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default LandingPage;