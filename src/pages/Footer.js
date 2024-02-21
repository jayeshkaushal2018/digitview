import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiLinksFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaProductHunt, FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGoogle, FaPhone, FaGem } from "react-icons/fa";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiAnswer } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* <div
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
        </div> */}
        <section className="" style={{ paddingTop: "10px" }}>
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
                  <h6 className="mb-4 ">
                    <Link to="/about" className="navbar-brand  fw-semibold">
                      About Us
                    </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                    <Link to="/career" className="navbar-brand  fw-semibold">
                      Careers
                    </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                    <Link to="/support" className="navbar-brand  fw-semibold">
                      Support
                    </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 "><h6 className="mb-4 ">
                    <Link to="/partner" className="navbar-brand  fw-semibold">
                    Partnership
                    </Link>
                  </h6></h6>
                </p>
                <p>
                  <h6 className="mb-4 "><Link to="/contact" className="navbar-brand  fw-semibold">
                  Contact Us
                    </Link></h6>
                </p>
                <p>
                  <h6 className="mb-4 "><Link to="/demo" className="navbar-brand  fw-semibold">
                  Get a Demo
                    </Link></h6>
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
                  <h6 className="mb-4 "><Link to="/whydigiview" className="navbar-brand  fw-semibold">
                  Why DigiView
                    </Link></h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Pre-Event</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">During Event</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Post Event</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Registration</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Mobile Apps</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Analytics & Reporting</h6>
                </p>
              </Col>

              <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <SiAnswer />
                  </i>{" "}
                  Soultions
                </h6>
                <p>
                  <h6 className="mb-4 ">In-Person Events</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Virtual Events</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Live Event Services</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Virtual Services</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Live Event Services</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Event Integrations</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Smart Connectors</h6>
                </p>
              </Col>

              <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <AiOutlineGlobal />
                  </i>{" "}
                  Resources
                </h6>
                <p>
                  <h6 className="mb-4 ">Pricing Plans</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Blog</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Customer Success Stories</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Online Training</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Accessibility Statement</h6>
                </p>
              </Col>

              {/* <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
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
              </Col> */}
            </Row>
            <Row></Row>
          </Container>
        </section>
        <div style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}>
          <p style={{ float: "left", paddingLeft: "40px" }}>© 2021 Copyright:</p>
          <p style={{ float: "right", paddingRight: "40px" }}>
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
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
