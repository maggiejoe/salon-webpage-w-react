import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

import img1 from '../../assets/gallery-img-1.png';
import img2 from '../../assets/gallery-img-2.png';
import img3 from '../../assets/gallery-img-3.png';
import img4 from '../../assets/gallery-img-4.png';
import img5 from '../../assets/gallery-img-5.png';
import img6 from '../../assets/gallery-img-6.png';
import img7 from '../../assets/gallery-img-7.png';
import img8 from '../../assets/gallery-img-8.png';
import img9 from '../../assets/gallery-img-9.png';
import img10 from '../../assets/gallery-img-10.png';
import img11 from '../../assets/gallery-img-11.png';
import img12 from '../../assets/gallery-img-12.png';


function GalleryPage() {
    return (
        <div className="gallery-background-img d-flex align-items-center">
            <Container className='mt-4'>
                <Row className=''>
                    {/* Gallery Img 1 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img1} alt='Gallery Img 1' />
                        </Card>
                    </Col>
                    {/* Gallery Img 2 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img2} alt='Gallery Img 2' />
                        </Card>
                    </Col>
                    {/* Gallery Img 3 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img3} alt='Gallery Img 3' />
                        </Card>
                    </Col>
                    {/* Gallery Img 4 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img4} alt='Gallery Img 4' />
                        </Card>
                    </Col>
                    {/* Gallery Img 5 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img5} alt='Gallery Img 5' />
                        </Card>
                    </Col>
                    {/* Gallery Img 6 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img6} alt='Gallery Img 6' />
                        </Card>
                    </Col>
                    {/* Gallery Img 7 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img7} alt='Gallery Img 7' />
                        </Card>
                    </Col>
                    {/* Gallery Img 8 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img8} alt='Gallery Img 8' />
                        </Card>
                    </Col>
                    {/* Gallery Img 9 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img9} alt='Gallery Img 9' />
                        </Card>
                    </Col>
                    {/* Gallery Img 10 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img10} alt='Gallery Img 10' />
                        </Card>
                    </Col>
                    {/* Gallery Img 11 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img11} alt='Gallery Img 11' />
                        </Card>
                    </Col>
                    {/* Gallery Img 12 */}
                    <Col className='col-3'>
                        <Card className='mb-4'>
                            <Card.Img className='' src={img12} alt='Gallery Img 12' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GalleryPage;