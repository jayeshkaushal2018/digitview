import React from 'react';
import './demo.css';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function DemoVideo() {
  const navigate = useNavigate("/onbording");
  const onBorad = () => {
    navigate("/onbording");
  };
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Demo</h1>
        </div>
      </header>
      <div className='container my-5 d-flex justify-content-center' style={{"paddingTop":"20px","paddingBottom":"20px"}} >
     
        <div className='row' style={{"backgroundColor":"#e7f0f8","paddingTop":"50px","paddingBottom":"50px","width":"50%","borderRadius":"20px"}}>
        
        <div className='col-lg-12 d-flex justify-content-center'>
        <h1 style={{"fontSize":"5rem" }}>GET DEMO</h1>
         </div>
         <div className='col-lg-12 d-flex justify-content-center'>
        <h1 style={{"fontSize":"1rem" ,"paddingTop":"5px","paddingBottom":"30px","marginLeft":"15%","marginRight":"10%"}}>Fill in the form and our team will get in touch with you shortly  to discuss your needs and arrange a personalized demo.</h1>
         </div>
          <div className='col-lg-12 d-flex justify-content-center'>
            <Form>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='first-name'><b>First Name</b></Form.Label>
                <Form.Control type='text' id='first-name' placeholder="Enter First name"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='last-name'><b>Last Name</b></Form.Label>
                <Form.Control type='text' id='last-name' placeholder="Enter Last name"/>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='email-address'><b>Email Address</b></Form.Label>
                <Form.Control type='email' id='email-address' placeholder="name@gmail.com" />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='phone-number'><b>Phone Number</b></Form.Label>
                <Form.Control type='tel' id='phone-number' placeholder="Ex :987654321" />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='message'><b>Your Message</b></Form.Label>
                <textarea className="form-control" id="message" rows="5" placeholder="Message"/>
              </Form.Group>
              <div style={{ "textAlign": "center" }}>
                <button type='submit' className='btn btn-primary reg-btn btn-lg' onClick={onBorad}>Get Demo</button>
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

export default DemoVideo;