import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook} from "react-icons/fa6";
import {  FaGoogle, FaGem } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="" style={{ paddingTop: "10px" }}>
          <Container className="container text-center text-md-start mt-5 pb-5">
            <Row>
              <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  {/* <i className="fas fa-gem me-3">
                    <FaGem />
                  </i> */}
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
                  {/* <i className="fas fa-gem me-3">
                    <FaProductHunt />
                  </i> */}
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
                  <h6 className="mb-4 ">
                  <Link
                      to="/pre-event"
                      className="navbar-brand  fw-semibold"
                    >
                    Pre-Event
                    </Link>
                    </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                  <Link
                      to="/during-event"
                      className="navbar-brand  fw-semibold"
                    >
                      During Event
                    </Link>
                    </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                  <Link
                      to="/post-eventt"
                      className="navbar-brand  fw-semibold"
                    >
                      Post Event
                    </Link>  
                  </h6>
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
                  {/* <i className="fas fa-gem me-3">
                    <SiAnswer />
                  </i>{" "} */}
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
                  <h6 className="mb-4 ">
                  <Link to="/open-api" className="navbar-brand  fw-semibold">Event Integrations</Link>
                  </h6>
                </p>
                <p>
                  <h6 className="mb-4 ">
                  <Link to="/smart-connect" className="navbar-brand  fw-semibold"> Smart Connectors</Link> 
                  </h6>
                </p>
              </Col>

              <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  {/* <i className="fas fa-gem me-3">
                    <AiOutlineGlobal />
                  </i>{" "} */}
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
                  // size={24}
                  className="footer_icons"
                  title="Facebook"
                  // style={{"width":"7.4vh","height":"7.4vh","borderRadius":"50%","textAlign":"center","padding":"1.58vh"}}
                />
              </i>
              <i className="fas fa-gem me-3">
                <BsGithub  className="footer_icons" title="Github" />
              </i>
              <i className="fas fa-gem me-3">
                <RiInstagramFill
                 
                  className="footer_icons"
                  title="Instagram"
                />
              </i>
              <i className="fas fa-gem me-3">
                <BsTwitter  className="footer_icons" title="Twitter" />
              </i>
              <i className="fas fa-gem me-3">
                <FaGoogle className="footer_icons" title="Google" />
              </i>
              <i className="fas fa-gem me-3">
                <TiSocialLinkedin  className="footer_icons" title="Linked" />
              </i>
            </div>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
