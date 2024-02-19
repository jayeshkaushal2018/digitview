import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiLinksFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook ,FaProductHunt,FaLocationDot} from "react-icons/fa6";
import { FaLinkedin ,FaGoogle, FaPhone,FaGem} from "react-icons/fa";
import {  BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-body-tertiary text-muted"
        style={{ marginTop: "150px" }}
      >
        <div
          className="text-center p-4"
          style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
        >
          <i className="fas fa-gem me-3">
            <FaFacebook size={25} />
          </i>
          <i className="fas fa-gem me-3">
            <BsGithub size={25} />
          </i>
          <i className="fas fa-gem me-3">
            <BsInstagram size={25} />
          </i>
          <i className="fas fa-gem me-3">
            <BsTwitter size={25} />
          </i>
          <i className="fas fa-gem me-3">
            <FaGoogle size={25} />
          </i>
          <i className="fas fa-gem me-3">
            <FaLinkedin size={25} />
          </i>
        </div>
        <section className="">
          <Container className="container text-center text-md-start mt-5">
            <Row>
              <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <FaGem />
                  </i>
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </Col>

              <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <FaProductHunt />
                  </i>
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </Col>

              <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <RiLinksFill />
                  </i>{" "}
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </Col>

              <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <IoMdContact />
                  </i>
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home me-3">
                    <FaLocationDot />
                  </i>{" "}
                  New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3">
                    <MdEmail />
                  </i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3">
                    <FaPhone />
                  </i>{" "}
                  + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3">
                    <FaPhone />
                  </i>{" "}
                  + 01 234 567 89
                </p>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </section>
        <div
          className="text-center p-4"
          style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
        </div>
      </footer>
    </>
  );
};

export default Footer;
