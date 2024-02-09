import React from 'react';
import './demo.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';

function demo() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Demo</h1>
        </div>
      </header>

      <div className='container my-5' >
        <div className='row'>
          <div className='col-lg-7 d-flex justify-content-center'>
            <Form>
              <Form.Group className='row mb-3'>
                <label for="fname" className='fname'>GET A DEMO <br />Make a booking now</label>
                <div className='col-md-6'>
                  <Form.Label htmlFor='first-name'>First Name</Form.Label>
                  <Form.Control type='text' id='first-name' />
                </div>
                <div className='col-md-6'>
                  <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                  <Form.Control type='text' id='last-name' />
                </div>
              </Form.Group>
              <Form.Group className='row mb-3'>
                <div className='col-md-6'>
                  <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                  <Form.Control type='email' id='email-address' />
                </div>
                <div className='col-md-6'>
                  <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                  <Form.Control type='tel' id='phone-number' />
                </div>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='message'>Your Message</Form.Label>
                <Form.Control type='textarea' id='message' />
              </Form.Group>
              <div style={{"textAlign":"center"}}>
              <button type='submit' className='btn btn-primary reg-btn btn-lg'>Register now</button>
              </div>
            </Form>
          </div>
          <div className='col-lg-5 d-flex align-items-center justify-content-center' >
            <div className="d-flex flex-column align-items-center">
              <div style={{ "background-color": "#f1f5f9", "borderRadius": "30px", "paddingLeft": "30px" ,"paddingRight":"30px","paddingTop":"25%","paddingBottom":"25%"}}>
                <h2 className="fs-1 mb-3 text-uppercase fw-bold" style={{"textAlign":"center"}}>Get a demo</h2>
                <p className="mb-5">Fill in the form and our team will get in <br />touch with you shortly to discuss your<br /> needs and arrange a personalized demo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark text-light py-5'>
        <Reviews />
      </div>
    </div>
  )
}

export default demo;