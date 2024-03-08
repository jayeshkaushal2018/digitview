import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdKey } from "react-icons/md";
import Image from "react-bootstrap/Image";
import Support from "./../assets/support.png";
import CustomerLove from "./../assets/customer_love.svg";
import { FaPhoneAlt } from "react-icons/fa";
import CarrerImage1 from "./../assets/carrer.jpg";
import CarrerImage2 from "./../assets/carrer.jpg";
import CarrerImage3 from "./../assets/world.jpg";
import CarrerImage4 from "./../assets/starwork.jpg";
const Career = () => {
  return (
    <>
      <Container style={{ paddingTop: "130px" }}>
        <Row>
          <Col>
            <p style={{ textAlign: "center", fontSize: "4.5vw" }}>
              We're growing <br />
              and looking for <br /><b style={{"color":"#0070e6"}}>Digivew</b> talent
            </p>
            <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
              Join the team bringing world-class technology to event <br />
              planners and companies around the world.{" "}
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: "12vw" }}
              >
                <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
                  Position opens <b>{/* <FaArrowRight /> */}</b>
                </p>
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            style={{
              paddingTop: "3.3vw",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image
                src={CarrerImage1}
                rounded
                style={{ border: "none" }}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10vw" }}>
          <Col>
            <div style={{ textAlign: "center", marginBottom: "5vw" }}>
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
                style={{ width: "10vw" }}
              >
                <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
                  Position <b></b>
                </p>
              </button>
            </div>
            <h1 style={{ textAlign: "center", fontSize: "3vw" }}>
              Open <b>Position</b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
              Click below to explore current career opportunities
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: "19vw" }}
              >
                <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
                  Position opens{" "}
                </p>
              </button>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "10vw",
          }}
        >
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              backgroundColor: "red",
              borderRadius: "10px",
            }}
            sm={5}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b>
                Community is integral to our culture
              </b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
              Our team, customers, partners and vendors all form part of a
              virtuous community who help us deliver DigitView.
            </p>
          </Col>
          <Col
            sm={7}
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image
                src={CarrerImage2}
                rounded
                className="img-fluid"
                style={{ border: "none" }}
              />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "10vw",
          }}
        >
          <Col
            sm={7}
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image
                src={CarrerImage3}
                rounded
                className="img-fluid"
                style={{ border: "none" }}
              />
            </div>
          </Col>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              backgroundColor: "white",
            }}
            sm={5}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b style={{ textAlign: "center", fontSize: "3vw" }}>
                We're taking on the world of events
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3vw" }}>
              With offices in Indian, USA we are building a global scalable
              business and are on the hunt for great talent to join our teams.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "10vw",
          }}
        >
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              backgroundColor: "white",
            }}
            sm={5}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b style={{ textAlign: "center", fontSize: "3vw" }}>
                Talented teams doing all-star work
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3vw" }}>
              From engineering to sales, our teams are high performing and
              engage in satisfying, purposeful work every day.
            </p>
          </Col>
          <Col
            sm={7}
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image
                src={CarrerImage4}
                rounded
                className="img-fluid"
                style={{ border: "none" }}
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10vw" }}>
          <Col style={{}}>
            <Card style={{ width: "18.2vw", height: " 20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <FaUserCircle size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>INSIGHTS </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    <b>FEBRUARY</b>
                  </p>
                  <p style={{ fontSize: "1vw" }}>
                    Crafting an Effective 30/60/90 Day Plan: Aligning Work and
                    Personal Goals for Success
                  </p>
                </Card.Text>
                {/* <div style={{ "textAlign":"" }}>
              <button type="button" class="btn btn-outline-primary">Create an account {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button>
              </div> */}
                <Button variant="primary">
                  Read more{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{}}>
            <Card style={{ width: "18.2vw", height: " 20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <FaUserCircle size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>INSIGHTS </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    <b>FEBRUARY</b>
                  </p>
                  <p style={{ fontSize: "1vw" }}>
                    Unveiling the Power of Engagement Surveys: Fostering
                    Collaboration and Innovation
                  </p>
                </Card.Text>
                {/* <div style={{ "textAlign":"" }}>
              <button type="button" class="btn btn-outline-primary">Create an account {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button>
              </div> */}
                <Button variant="primary">
                  Read more{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{}}>
            <Card style={{ width: "18.2vw", height: " 20.8vw" }}>
              <Card.Body>
                <Card.Title>
                  <FaUserCircle size={"3.3vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.67vw" }}>
                    <b>INSIGHTS </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "1vw" }}>
                    <b>January</b>
                  </p>
                  <p style={{ fontSize: "1vw" }}>
                    New Year, New You: Transforming Your Career in the
                    Technology Sector
                  </p>
                </Card.Text>
                {/* <div style={{ "textAlign":"" }}>
              <button type="button" class="btn btn-outline-primary">Create an account {" "}
              <b style={{color:"blue"}}>
                <FaArrowRight />
              </b></button>
              </div> */}
                <Button variant="primary">
                  Read more{" "}
                  <b style={{ color: "white" }}>
                    <FaArrowRight />
                  </b>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row
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
        </Row> */}
        {/* <Row style={{ marginTop: "7vw" }}>
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
              <Image src={Support} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row> */}
        {/* <Row style={{ marginTop: "7vw" }}>
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
        </Row> */}
        <Row style={{ marginTop: "8vw" }}>
          <Col>
            <div style={{ textAlign: "center" }}>
              <Image src={CustomerLove} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          backgroundColor: "#dfe6ea",
          padding: "120px",
          marginTop: "6vw",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "5vw" }}>Open positions</h1>
        <p style={{ textAlign: "center", fontSize: "1.5vw" }}>
          Click below to explore current career opportunities{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "10vw" }}
          >
            <p style={{ textAlign: "center", fontSize: "1vw" }}>
              <b>Open positions</b>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Career;
