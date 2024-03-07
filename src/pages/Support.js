import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaArrowRight } from "react-icons/fa6";
import CustomerLove from "./../assets/customer_suppoter_love.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdKey } from "react-icons/md";
import SupportImage from "./../assets/support.png";

const Support = () => {
  return (
    <>
      <Container style={{ paddingTop: "130px" }}>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center", fontSize: "5vw" }}>
              24/7 support
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
              Sign in to raise tickets{" "}
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: "19vw" }}
              >
                <p style={{ textAlign: "center", fontSize: "1vw" }}>
                  Find answers or submit a ticket{" "}
                  <b>
                    <FaArrowRight />
                  </b>
                </p>
              </button>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "130px"}}>
          <Col >
            <Card style={{ width: "18.2vw", height: " 20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <FaUserCircle size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>
                      New to <br /> DigiView ?{" "}
                    </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    To browse FAQs or raise and track tickets,you'll need to
                    create an account in the support portal.
                  </p>
                </Card.Text>
                {/* <div style={{ "textAlign":"" }}>
              <button type="button" class="btn btn-outline-primary">Create an account {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button>
              </div> */}
                <Button variant="primary">
                  Create an account{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{}}>
            <Card style={{ width: "18.2vw", height: "20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <TiContacts size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>
                      Are you an <br />
                      Agent?
                    </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    Log in to access all Agent access controls.
                  </p>
                </Card.Text>
                {/* <button type="button" class="btn btn-outline-primary">Login Here {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button> */}
                <Button variant="primary">
                  Login Here{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{}}>
            <Card style={{ width: "18.2vw", height: "20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <MdKey size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>Forgotten password?</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    Click the button below and we'll email you a one-time link
                    to reset your password.
                  </p>
                </Card.Text>
                {/* <button type="button" class="btn btn-outline-primary">Login Here {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button> */}
                <Button variant="primary">
                  Reset Password{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "5.3vw",
            color: "black",
            paddingBottom: "120px",
            paddingTop: "20px",
          }}
        >
          <Col>
            <h1 style={{ textAlign: "center", fontSize: "4.5vw" }}>
              Weekend support
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
              For emergency weekend support, call our toll-free,
              <br /> numbers, then press 1 for DigiView support, then <br />
              press 2 for emergency support and leave your
              <br /> message. Our support consultant on weekend duty
              <br /> will call back within 15–30 minutes to assist you.
              <br />
              <br />
              <p style={{ textAlign: "center" }}>
                <FaPhoneAlt /> APAC : (+61) 0000 000 000
                <br />
                <FaPhoneAlt /> EMEA : (+44) 111 111 1111
                <br />
                <FaPhoneAlt /> USA : (+1) 222 222 2222
                <br />
                <FaPhoneAlt /> NZ : (+64) 3333 333 333
              </p>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vw" }}>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
            }}
            sm={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              24/7 support available via <br /> phone or email
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3vw" }}>
              Move ahead with confidence, knowing that all our support is
              provided by DigiView experts.We don’t outsource our technical
              support and have fully staffed support teams based in the
              india.The event management industry never sleeps, which is why we
              have a dedicated support portal for logging tickets and
              up-to-the-minute tracking for all support requests.Support is
              available by phone and email. Our portal includes a FAQ library
              with hundreds of topics and links to educational videos, and our
              priority support service is available by subscription for periods
              of time when you are onsite at an event.{" "}
            </p>
          </Col>
          <Col sm={7}>
            <div style={{ textAlign: "center", paddingTop: "30%" }}>
              <Image src={SupportImage} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vw" }}>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b>Prioritizing security</b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
              Built on a security-first design, our event technology <br />{" "}
              platform provides you with total peace of mind that <br /> your
              data is safe and secure. DigiView is hosted on <br /> the
              Microsoft Azure cloud platform, offering a <br />
              guaranteed 99.95% uptime, with a dedicated <br /> database per
              client, multiple layers of security, and <br /> PCI Level 1
              version 3.2 compliance across data and
              <br /> credit card information, and also includes a data
              <br /> protection toolkit specifically designed to assist you{" "}
              <br /> in maintaining your own compliance with your local <br />{" "}
              data protection regulations (GDPR).
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8vw" }}>
          <Col>
            <div style={{ textAlign: "center" }}>
              <Image src={CustomerLove} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ "backgroundColor": "#dfe6ea","padding":"120px" }}>
        <h1 style={{ textAlign: "center", fontSize: "5vw" }}>See the platform <br/> in action</h1>
        <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
        Add the factor to your next event. Find out <br/> how DigiView can power your success.{" "}
             {" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "10vw" }}
          >
            <p style={{ textAlign: "center", fontSize: "1vw" }}>
             <b>
                Get a demo
              </b>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Support;
