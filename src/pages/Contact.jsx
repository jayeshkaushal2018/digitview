import React from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
// import { Reviews } from '../components/Reviews';

function Contact() {
    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5' style={{"padding":"100px"}}> 
                <div className='row' >
                    <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{"backgroundColor":"#0d6efd","borderRadius":"30px 0px 0px 30px","color":"white"}} >
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center' style={{"backgroundColor":"#e7f0f8","borderRadius":"0px 30px 30px 0px","padding":"40px"}}>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-12'>
                                    <Form.Label htmlFor='first-name'><b>First Name</b></Form.Label>
                                    <Form.Control type='text' id='first-name' placeholder="Enter First name" />
                                </div>
                               
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                            <div className='col-md-12'>
                                    <Form.Label htmlFor='last-name'><b>Last Names</b></Form.Label>
                                    <Form.Control type='text' id='last-name' placeholder="Enter Last name"/>
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-12  '>
                                    <Form.Label htmlFor='email-address'><b>Email Address</b></Form.Label>
                                    <Form.Control type='email' id='email-address' placeholder="name@gmail.com"/>
                                </div>
                                
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                            <div className='col-md-12'>
                                    <Form.Label htmlFor='phone-number'><b>Phone Number</b></Form.Label>
                                    <Form.Control type='tel' id='phone-number' placeholder="Ex :987654321" />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'><b>Date</b></Form.Label>
                                    <Form.Control type='date' id='date' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'><b>Number Of Guests</b></Form.Label>
                                    <Form.Control type='number' id='guests-number' placeholder="Ex : 1 to 8" />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'><b>Comments</b></Form.Label>
                                <Form.Control type='textarea' id='comments' placeholder="Message"/>
                            </Form.Group>
                            <div class="d-grid gap-2">
                            <button type='submit' className='btn btn-primary btn-lg '><b>Submit</b></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            {/* <div className='bg-dark text-light py-5'>
                <Reviews />
            </div> */}
        </div>
    )
}

export default Contact;