import React from 'react';
import Map from '../Map/index.js';

import { Container } from 'react-bootstrap';
function Footer() {
    return (
        <div>
            <div className="p-3 text-center footer">
                <Container>
                    <div className='d-flex justify-content-center'>
                        <Map></Map>
                    </div>
                    <div>
                        &copy; Borcelle Hair Salon
                    </div>
                </Container>
            </div>
        </div >
    )
}

export default Footer;