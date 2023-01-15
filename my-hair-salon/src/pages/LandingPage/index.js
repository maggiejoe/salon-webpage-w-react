import React from 'react';

import { Container, Row } from 'react-bootstrap';

function LandingPage() {

    const bgStyles = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100%'
    }

    return (
        <div className='landingPageContainer' style={{ width: '100%' }}>
            <div className='background-img' style={bgStyles}>
                <Container>
                    <Row>
                        <h1 className='d-flex justify-content-center align-items-center'>Container Header</h1>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default LandingPage;