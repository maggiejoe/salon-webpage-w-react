import React, { useState } from 'react';
import { Button, Form, Container, Col } from 'react-bootstrap';
import video from '../../assets/contact-video.mp4';

function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='body-content contact-background-img d-flex align-items-center'>
            <Container className='d-flex align-items-center justify-content-between'>
                <Col className='m-3'>
                    <Form
                        onSubmit={handleSubmit}
                        className='blurred-container-bg border p-4 rounded shadow'
                    >
                        <Form.Label className='fs-1'>Contact Us</Form.Label>
                        <Form.Group>
                            <Form.Label className='p-1 m-0 d-flex justify-content-start'>
                                Name
                            </Form.Label>
                            <Form.Control
                                type='text'
                                value={name}
                                placeholder="What's your name?"
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='p-1 m-0 d-flex justify-content-start'>
                                Email
                            </Form.Label>
                            <Form.Control
                                type='email'
                                value={email}
                                placeholder="What's your email?"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='p-1 m-0 d-flex justify-content-start'>
                                We'd love to hear from you!
                            </Form.Label>
                            <Form.Control
                                type='text'
                                value={request}
                                style={{ height: 100, verticalAlign: "top" }}
                                onChange={(event) =>
                                    setRequest(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Button
                            type='submit'
                            className='m-2 px-5 d-flex justify-content-center'
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col className='col-7 m-3'>
                    <video src={video} width="600" height="300" controls="controls" autoplay="true" loop="true" className='w-100 h-100 rounded d-flex align-items-center'/>
                </Col>
            </Container>
        </div >
    )
}
export default ContactPage;