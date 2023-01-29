import React from 'react';

import BookingForm from '../../components/BookingForm';

import { Container } from 'react-bootstrap';

function BookPage() {
   return (
      <div className='body-content'>
         <Container className='d-flex justify-content-center header-font fw-bolder'>
            <h1>Book With Us</h1>
         </Container>
         <Container>
            <BookingForm />
         </Container>
      </div>
   )
}

export default BookPage;