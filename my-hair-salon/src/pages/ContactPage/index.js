import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='body-content contact-background-img d-flex align-items-center'>
            {/* <Container> */}
            <Form
                onSubmit={handleSubmit}
                className='border m-2 p-4 rounded shadow'
            >
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
                        Special Requests
                    </Form.Label>
                    <Form.Control
                        type='text'
                        style={{ height: 40 }}
                        value={request}
                        placeholder="What's your phone number?"
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
            {/* </Container> */}
        </div>
    )
}
export default ContactPage;