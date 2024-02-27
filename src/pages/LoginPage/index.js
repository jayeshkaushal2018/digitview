import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/celebration-pana.svg";


const LoginPage = () => {
  const [isSignup, setSignup] = useState(true);
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      axios
        .post("https://reqres.in/api/login", {
          email: values.email,
          password: values.password,
        })
        .then((result) => {
          localStorage.setItem("token", result.data.token);
          Navigate("/event-organize");
        })
        .catch((error) => {
          alert("service error");
          console.log(error);
        });
    },
  });

  const signupformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-page">
      <Row className="mx-0">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="form-container">
            {/* <a href="/">
              <h3 className="brand-name"> */}  
              <Link
              to="/"
              className="brand-name fw-semibold"
              style={{ "margin-right": "30px" ,"textDecoration": 'none'}}
            >
                <h1>DigiView</h1>
                </Link>
                {/* </h3>
            </a> */}
            {isSignup ? (
              <>
                <b>
                  <h3>Create your account</h3>
                </b>
                <Form className="d-grid" onSubmit={signupformik.handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={signupformik.values.email}
                      onChange={signupformik.handleChange}
                      placeholder="Email"
                    />
                    {signupformik.errors.email &&
                      signupformik.touched.email && (
                        <p className="error-message">
                          {signupformik.errors.email}
                        </p>
                      )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={signupformik.values.password}
                      onChange={signupformik.handleChange}
                      placeholder="Password"
                    />
                    {signupformik.errors.password &&
                      signupformik.touched.password && (
                        <p className="error-message">
                          {signupformik.errors.password}
                        </p>
                      )}
                  </Form.Group>
                  <Form.Label>Choose a user</Form.Label>

                  <Form.Select className="mb-3">
                    <option value="organizer">Organizer</option>
                    <option value="attendee">Attendee</option>
                  </Form.Select>

                  <Button variant="primary" className="login" type="submit">
                    Signup
                  </Button>
                  <div className="text-center">
                    <h6>
                      <Button variant="link" onClick={() => setSignup(false)}>
                        Login to your account
                      </Button>
                    </h6>
                  </div>
                </Form>
              </>
            ) : (
              <>
                <b>
                  <h3>Log in to your Account </h3>
                </b>
                <Form className="d-grid" onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="Email"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="error-message">{formik.errors.email}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="Password"
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className="error-message">{formik.errors.password}</p>
                    )}
                  </Form.Group>

                  <Button variant="primary" className="login" type="submit">
                    Log in
                  </Button>
                  <div className="text-center">
                    <h6>
                      Don't have an account?{" "}
                      <Button variant="link" onClick={() => setSignup(true)}>
                        Create your account
                      </Button>
                    </h6>
                  </div>
                </Form>
              </>
            )}
          </div>
        </Col>
        <Col className="background-img">
          <div>
            <p className="welcome">Welcome to DigiView</p>

            <p>Event Management Platform</p>
            <img src={login} alt="" className="border-0" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LoginPage;
