import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

function BookingForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
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
                    Phone Number
                </Form.Label>
                <Form.Control
                    type='phone'
                    value={number}
                    placeholder="What's your phone number?"
                    onChange={(event) =>
                        setNumber(event.target.value)
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
                    Requested Date
                </Form.Label>
                <Form.Control
                    type='date'
                    value={date}
                    placeholder="When would you like to book your appointment?"
                    onChange={(event) =>
                        setDate(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className='p-1 m-0 d-flex justify-content-start'>
                    Time
                </Form.Label>
                <Form.Control
                    type='time'
                    value={time}
                    placeholder="What time would you like too book your appointment?"
                    onChange={(event) =>
                        setTime(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className='p-1 m-0 d-flex justify-content-start'>
                    Phone Number
                </Form.Label>
                <Form.Control
                    type='text'
                    value={number}
                    placeholder="What's your phone number?"
                    onChange={(event) =>
                        setNumber(event.target.value)
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
    )
}

export default BookingForm;