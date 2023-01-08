import React from 'react';
import GlassmorphicContainer from '../../components/GlassmorphicContainer';

import hero from '../../assets/landing-page-img.png';

// import { Container } from 'react-bootstrap';
function LandingPage() {
    return (
        <div>
            <img src={hero} alt='landing page' className='hero-img' />

            <GlassmorphicContainer>
                <p>Hello, I'm a glassmorphic container!</p>
            </GlassmorphicContainer>

        </div>
    )
}

export default LandingPage;