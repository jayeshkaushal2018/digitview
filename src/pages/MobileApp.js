import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MobileImage from "./../assets/support.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { IoSync } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import { HiRocketLaunch } from "react-icons/hi2";
import { MdVisibility } from "react-icons/md";

function MobileApp() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#dfe6ea",
          padding: "120px",
          marginTop: "100px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
          Custom event apps for <br /> everyone.
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
          Our all-in-one solution includes two powerful custom mobile apps that
          are ready to energize and your <br /> attendees, exhibitors,
          organizers.{" "}
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
      <Container
        style={{
          paddingTop: "4vw",
        }}
      >
        <Row>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
              backgroundColor: "white",
            }}
            sm={5}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              The Attendee App
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3vw" }}>
              Build your own custom-branded Attendee App that gives your
              attendees an exciting and rewarding mode to engage. Create an
              immersive experience for in-person and virtual attendees, allowing
              everyone to engage in networking, gamification activities, meeting
              matching, and more.
            </p>
          </Col>
          <Col
            sm={7}
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image src={MobileImage} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "8vw",
          }}
        >
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdColorPalette size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Unlimited customization</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    Create, style and publish your event app with ease. Add
                    maps, restaurant listings, phone lists and more customized
                    options.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <FaTrophy size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Gamification and networking</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    Add on sophisticated gamification and a private social
                    network where attendees can post images, messages and more
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoSync size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Seamless platform integration</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    Last-minute changes? Speaker a no-show? Synchronize every
                    change made within EventsAir to your Apps instantly.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            sm={7}
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image src={MobileImage} rounded style={{ border: "none" }} />
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
              The Organizer App
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.3vw" }}>
              Access key event management features from the DigiView platform in
              the palm of your hand, ensuring when you’re on the event floor you
              have what you need. This powerful mobile app creates a custom,
              streamlined version of DigiView, allowing you to effortlessly
              manage your event onsite or remotely.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "8vw",
          }}
        >
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <AiFillAppstore size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Everything at your fingertips</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    With over 20+ core tools available, you have instant access
                    to; agendas, sessions, functions, check-ins, social media
                    streaming, staff comms, run sheets, and more.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <HiRocketLaunch size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Keep everything running smooth</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    Check attendees in and out of sessions, easily collect
                    payments and send out event alerts or notifications to
                    attendees whenever you need.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <MdVisibility size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Maintain full event visibility</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                    Ensure you don't miss a beat with easy access to the agenda,
                    the ability to manage and allocate tasks on your run sheet
                    and real-time event reports.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "2.5vw" }}>
          <Col
            style={{
              paddingRight: "2.7vw",
            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b>Publish your event <br/> apps in minutes</b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
            We make it easy for you to design, test and publish <br/>your event apps in minutes. This means that all <br/> attendees and event staff can access your apps <br/> from their Apple or Android devices.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MobileApp;
