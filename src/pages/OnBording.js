import React from 'react';
import "./OnBording.css";
import { Form } from 'react-bootstrap';

function OnBording() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>OnBording</h1>
        </div>
      </header>
      <div className='container my-5 d-flex justify-content-center' style={{"paddingTop":"20px","paddingBottom":"20px"}} >
     
        <div className='row' style={{"backgroundColor":"#e7f0f8","paddingTop":"50px","paddingBottom":"50px","width":"50%","borderRadius":"20px"}}>
        
        <div className='col-lg-12 d-flex justify-content-center'>
        <h1 style={{"fontSize":"5rem" }}>OnBording</h1>
         </div>
         <div className='col-lg-12 d-flex justify-content-center'>
        <h1 style={{"fontSize":"2rem" ,"paddingTop":"5px","paddingBottom":"30px","marginLeft":"15%","marginRight":"10%"}}>Join our digital event platform</h1>
         </div>
          <div className='col-lg-12 d-flex justify-content-center'>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label htmlFor='first-name'><b>First Name</b></Form.Label>
                <Form.Control type='text' id='first-name' placeholder="Enter First name" />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='last-name'><b>Last Name</b></Form.Label>
                <Form.Control type='text' id='last-name' placeholder="Enter Last name"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='email-address'><b>Email Address</b></Form.Label>
                <Form.Control type='email' id='email-address' placeholder="name@gmail.com"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='phone-number'><b>Phone Number</b></Form.Label>
                <Form.Control type='tel' id='phone-number' placeholder="Ex :987654321" />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='phone-number'><b>Password</b></Form.Label>
                <Form.Control type='password' id='phone-number' placeholder="*********"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='phone-number'><b>Confirm Password</b></Form.Label>
                <Form.Control type='password' id='phone-number'  placeholder="*********"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='invite-code'><b>Invite Code</b></Form.Label>
                <Form.Control type='text' id='invite-code' placeholder="Ex: 9876" />
              </Form.Group>
              
              <div style={{ "textAlign": "center" }}>
                <button type='submit' className='btn btn-primary reg-btn btn-lg'>Register</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* 
      <div className='bg-dark text-light py-5'>
        <Reviews />
      </div> */}
    </div>
  )
}

export default OnBording;