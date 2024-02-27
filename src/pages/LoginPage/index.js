import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const LoginPage = () => {
  return (
    <div className="login-page">
      <Row className="mx-0">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="form-container">
            <a href="/">
              <h3 className="brand-name">DigiView.</h3>
            </a>

            <b>
              <h3>Log in to your Account </h3>
            </b>
            <Form className="d-grid">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" className="login">
                Log in
              </Button>
              <div className="text-center">
                <h6>
                  Don't have an account?{" "}
                  <Button variant="link">Create your account</Button>
                </h6>
              </div>
            </Form>
          </div>
        </Col>
        <Col className="background-img">
          <div>
            <p className="welcome">Welcome to DigiView</p>

            <p>Event Management Platform</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LoginPage;
