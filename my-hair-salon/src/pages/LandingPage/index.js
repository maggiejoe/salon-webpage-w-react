import React from 'react';

import hero from '../../assets/landing-page-img.png';

function LandingPage() {
    return (
        <div>
            <img src={hero} alt='landing page' className='hero-img' />
        </div>
    )
}

export default LandingPage;