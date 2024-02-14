import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const storedData = localStorage.getItem("token");

  const navigate = useNavigate("/login");

  const login = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Navbar expand="lg" className="fixed-top navi-menu">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand text-light fw-semibold"
              style={{ "margin-right": "30px" }}
            >
              {/* <img src={DigiviewLogo} className="img-fluid" alt="" width="30" height="40"/> */}
              DigiView
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">
                      <b>Our Services</b>
                    </a>
                    <ul>
                      <li>
                        <a href="#"> <Nav.Link
                          href="/pre-event"
                          style={{ "margin-right": "30px" }}
                        >Pre-Event</Nav.Link></a>
                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/budget"
                                style={{ "margin-right": "30px" }}
                              >
                                Budget&nbsp;Allocation
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/ticket"
                                style={{ "margin-right": "30px" }}
                              >
                                Ticket&nbsp;Purchase
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/rspv"
                                style={{ "margin-right": "30px" }}
                              >
                                RSVP&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/Promotion"
                                style={{ "margin-right": "30px" }}
                              >
                                Promotions
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/vendor"
                                style={{ "margin-right": "30px" }}
                              >
                                Vendor&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#"><Nav.Link
                          href="/during-event"
                          style={{ "margin-right": "10px" }}
                        >During-Event</Nav.Link></a>
                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/attendance"
                                style={{ "margin-right": "30px" }}
                              >
                                Attendance&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/networking"
                                style={{ "margin-right": "30px" }}
                              >
                                Networking&nbsp;Rooms
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/broadcasting"
                                style={{ "margin-right": "30px" }}
                              >
                                Video&nbsp;Broadcasting
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/virtual-communication"
                                style={{ "margin-right": "30px" }}
                              >
                                Virtual&nbsp;Communication&nbsp;Tool
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/event-status"
                                style={{ "margin-right": "30px" }}
                              >
                                Live&nbsp;Event&nbsp;Status
                              </Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#"><Nav.Link
                          href="/post-event"
                          style={{ "margin-right": "30px" }}
                        >Post-Event</Nav.Link></a>

                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link href="/post-promotion">
                                Post&nbsp;Event&nbsp;Promotion
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link href="/event-recording">
                                Event&nbsp;Recording
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link href="/audience-data">
                                Audience&nbsp;Data&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link href="/clone-event">
                                Clone&nbsp;Events
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link href="/feedback">Feedback</Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <Nav.Link
                href="/about"
                className="text-light "
                style={{ "margin-right": "30px" }}
              >
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-light"
                style={{ "margin-right": "30px" }}
              >
                <b>Contact Us</b>
              </Nav.Link>
              <Nav.Link href="/login" className="text-light">
                {storedData ? (
                  <Button
                    variant="outline-light"
                    className="px-4 py-2"
                    onClick={logOut}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant="outline-light"
                    className="px-4 py-2"
                    onClick={login}
                  >
                    <b>Login</b>
                  </Button>
                )}
              </Nav.Link>
              <Nav.Link href="/demo" className="text-light">
                <Button variant="outline-light" className="px-4 py-2">
                  <b>Get a demo</b>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
