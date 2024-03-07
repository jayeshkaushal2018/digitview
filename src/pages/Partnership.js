import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PartnerImage1 from "./../assets/Meeting_your_unique_service_requirement_image.png";
import { GiRoundStar } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa6";
import { IoSync } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";
import Card from "react-bootstrap/Card";
const Partnership = () => {
  return (
    <>
      <Container
      >
        <Row>
          <Col>
          <div
        style={{
          backgroundColor: "#fff",
          padding: "120px",
          marginTop: "100px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
          Our Partners
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
         DigitView Partners are trusted third parties who can <br/>help you create amazing event using the DigiView <br/> platform{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "10vw" }}
          >
            <p style={{ textAlign: "center", fontSize: "1vw" }}>
              <b>Get a demo</b>
            </p>
          </button>
        </div>
      </div>
          </Col>
        </Row>
        <Row  style={{
              // paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              // backgroundColor: "red",
            }}>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              // backgroundColor: "white",
            }}
            sm={6}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.6vw" }}>
              Meeting your unique services requirements
            </h1>
            <p style={{ textAlign: "left", fontSize: "1.3vw" }}>
            The   DigitView Partner Program offers clients a greater depth of services in specialized areas, such as onsite registration, onsite attendee management, accreditation services, badge printing services, onsite staffing services, consulting services, and innovative check-in services, like facial recognition, RFID, and Virtual and Hybrid event production services.
            </p>
          </Col>
          <Col
            sm={6}
            style={{
              paddingTop: "3.3vw",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image src={PartnerImage1} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "8vw",
          }}
        >
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner1</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> PLATINUM PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  From self check-in kiosks and session scanning to virtual platform management, Touchpoint specialise in a range of technology solutions. We will work with you to develop a comprehensive strategy to transform your event into a holistic virtual experience. As the global Platinum Partner for DigitView and their new virtual conference platform DigitView we are your Touchpoint for online services.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner 2</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> GOLD PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  A majority woman-owned event services company, providing US-based development, support, and expertise to meetings professionals since 2003. We provide event registration, virtual meeting assistance, custom software, websites, badging, mobile apps, consulting, and more. Our white glove service is second to none.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner 3</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> PLATINUM PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  EventFrog are vibrant leaders delivering ideal technology solutions for onsite registration and virtual experiences. EventFrog offer a complete end-to-end registration service that is dedicated to providing a seamless customer journey from online through to onsite. Their new virtual services on offer can help to deliver the onsite event experience to an online platform. 
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "8vw",
          }}
        >
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner 4</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> GOLD PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  RegOnsite is a leading event registration provider, focused on cost effective solutions for the Exhibition and Conference market.​ Combining an extensive knowledge of EventsAir with an ever-expanding supply of the latest equipment, RegOnsite has grown to become a fully-fledged industry partner.​
                 </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner 5</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> AUTHORIZED PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  An End-to-End Event Tech Service provider for all physical, virtual and hybrid events (Conference, Exhibitions, Incentive Trips, AGMs, Gamification, Sports and Fundraising). We use technology to provide solutions in three disciplines: Engineering Service, Privacy Management and Gamification. We excel in events that are Last Minute, Low Budget and with Large Numbers.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 25vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Partner 6</b>
                  </p>
                </Card.Subtitle>
                <Card.Text style={{"color":"orange"}}>
                <p style={{ fontSize: "1.0vw", textAlign: "center" }}>
                    <b> <GiRoundStar size={24}/> AUTHORIZED PARTNER</b>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  From self check-in kiosks and session scanning to virtual platform management, Touchpoint specialise in a range of technology solutions. We will work with you to develop a comprehensive strategy to transform your event into a holistic virtual experience. As the global Platinum Partner for DigitView and their new virtual conference platform DigitView we are your Touchpoint for online services.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <div
        style={{
          backgroundColor: "#fff",
          padding: "120px",
          marginTop: "100px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
        See the platform in action
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
        Add  factor to your next event. Find out how <br/>Digiview can power your success.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "10vw" }}
          >
            <p style={{ textAlign: "center", fontSize: "1vw" }}>
              <b>Get a demo</b>
            </p>
          </button>
        </div>
      </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partnership;
