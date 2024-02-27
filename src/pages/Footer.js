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
        <section className="" style={{ paddingTop: "10px" }}>
          <Container className="container text-center text-md-start mt-5 pb-5">
            <Row>
              <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto">
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
                  <h6 className="mb-4 ">
                    <h6 className="mb-4 ">
                      <Link to="/partner" className="navbar-brand  fw-semibold">
                        Partnership
                      </Link>
                    </h6>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                    <Link to="/contact" className="navbar-brand  fw-semibold">
                      Contact Us
                    </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                    <Link to="/demo" className="navbar-brand  fw-semibold">
                      Get a Demo
                    </Link>
                  </h6>
                </p>
              </Col>

              <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <FaProductHunt />
                  </i>
                  Products
                </h6>
                <p>
                  <h6 className="mb-4 ">
                    <Link
                      to="/whydigiview"
                      className="navbar-brand  fw-semibold"
                    >
                      Why DigiView
                    </Link>
                  </h6>
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
                  <h6 className="mb-4 ">
                    <Link to="/mobileapp" className="navbar-brand  fw-semibold">
                      Mobile Apps
                    </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                  <Link to="/analytic" className="navbar-brand  fw-semibold">
                    Analytics & Reporting
                    </Link>
                    </h6>
                </p>
              </Col>

              <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    <SiAnswer />
                  </i>{" "}
                  Soultions
                </h6>
                <p>
                  <h6 className="mb-4 ">
                  <Link to="/in-person" className="navbar-brand  fw-semibold">In-Person Events </Link>
                    </h6>
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
                  <h6 className="mb-4 ">
                  <Link to="/pco-event" className="navbar-brand  fw-semibold">PCOs and Event Agencies </Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Event Integrations</h6>
                </p>
                <p>
                  <h6 className="mb-4 ">Smart Connectors</h6>
                </p>
              </Col>

              <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto">
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
            </Row>
            <div className="d-flex justify-content-center">
              <i className="fas fa-gem me-3">
                <FaFacebook
                  size={24}
                  className="footer_icons"
                  title="Facebook"
                />
              </i>
              <i className="fas fa-gem me-3">
                <BsGithub size={24} className="footer_icons" title="Github" />
              </i>
              <i className="fas fa-gem me-3">
                <BsInstagram
                  size={24}
                  className="footer_icons"
                  title="Instagram"
                />
              </i>
              <i className="fas fa-gem me-3">
                <BsTwitter size={24} className="footer_icons" title="Twitter" />
              </i>
              <i className="fas fa-gem me-3">
                <FaGoogle size={24} className="footer_icons" title="Google" />
              </i>
              <i className="fas fa-gem me-3">
                <FaLinkedin size={24} className="footer_icons" title="Linked" />
              </i>
            </div>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
