import React, { useState } from 'react';

import bgImage from '../../assets/landing-page-img.png';

import { Container, Row, Col } from 'react-bootstrap';

// import { Container } from 'react-bootstrap';
function LandingPage() {

    const styles = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }

    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
    const [blurAmount, setBlurAmount] = useState(5);

    // const handleMouseMove = event => {
    //     setGradientPosition({
    //         x: event.clientX,
    //         y: event.clientY
    //     });
    //     setBlurAmount(10);
    // };

    // const handleMouseLeave = () => {
    //     setBlurAmount(5);
    // };

    return (
        <div style={styles}>
            <div className="gmContainer"
                style={{
                    '--gradient-x': gradientPosition.x,
                    '--gradient-y': gradientPosition.y,
                    filter: `blur(${blurAmount}px)`,
                    position: "relative"
                }}
            >
                <div>
                    <Container>
                        <Row>
                            <Col className='m-3 p-3'>
                                <h1>This is a container</h1>
                            </Col>
                            <Col className='m-3 p-3'>
                                <h1>This is a container</h1>
                            </Col>
                            <Col className='m-3 p-3'>
                                <h1>This is a container</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;