import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import conference from "./../assets/conference_01.jpg";
import { FaCheck } from "react-icons/fa";

function PcoEvent() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#dfe6ea",
          padding: "6.25vw",
          marginTop: "8.vh",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
          More memorable <br /> in-person events
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
          Built for the professional event organizer{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="lg">
            <b>Request a demo</b>
          </Button>
        </div>
      </div>
      <Container className="container text-center text-md-start mt-5 pb-5">
        <Row style={{ marginTop: "7vw" }}>
          <Col
            style={
              {
                //   paddingRight: "2.7vw",
                //   paddingTop: "1.3vw",
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b> Amazing events <br/> for clients and <br/> their attendees</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            DigiView streamlines event management for PCOs <br /> and 
            Event Agencies to free you and your team up to <br/> deliver 
             more engaging events.{" "}
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Live polls, Q&A and gamification</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Customized attendee app</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Engage remote attendees</b>
            </p>
          </Col>
          <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vw" }}>
        <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
          </Col>
          <Col
            style={
              {
                  paddingLeft: "3.0vw",
                //   paddingTop: "1.3vw",
                // "backgroundColor":"red"
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b> Plan everything from one place</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            From task lists to budgeting and inventory <br/>management, DigiView all-in-one event <br/>management software makes pre-event planning<br/> a breeze:.{" "}
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Create and forecast budgets</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Easily assign and manage tasks</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Track inventory and plan seating</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Manage accommodation and housing</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Produce agendas and run sheets</b>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vw" }}>
        <Col
            style={
              {
                  paddingLeft: "3.0vw",
                //   paddingTop: "1.3vw",
                // "backgroundColor":"red"
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b> The best of both worlds, remote and in-person</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            Help your clients to enrich their event experience by opening your event up to those who live in other cities or countries, who are unable to physically attend or simply prefer a virtual option.
           </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Immersive virtual and hybrid events</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Highly secure and scalable platform</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Record content and provide on-demand</b>
            </p>
          
          </Col>
        <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
          </Col>
    
        </Row>
        <Row style={{ marginTop: "7vw" }}>
        <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
        </Col>
        <Col
            style={
              {
                  paddingLeft: "3.0vw",
                //   paddingTop: "1.3vw",
                // "backgroundColor":"red"
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>Provide self-serve features to all stakeholders</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            Don’t waste precious time chasing speakers and exhibitors, or managing registration requests empower them to self-serve with our easy to use portals.</p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Give attendees full control over their experience</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Allow speakers to manage their own bios</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Exhibitors can select booths and upload assets</b>
            </p>
          
          </Col>
        
    
        </Row>
        <Row style={{ marginTop: "7vw" }}>
    
        <Col
            style={
              {
                  paddingLeft: "3.0vw",
                //   paddingTop: "1.3vw",
                // "backgroundColor":"red"
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>Simplify check-in for everyone</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            Make long check-in queues a thing of the past with a variety of options: QR codes, kiosks or beacon technology linked to their mobile app. Eliminate long lines and delays.</p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Offer multiple check-in options</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/>	Print name badges in advance or onsite</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/>	Control access to sessions and functions</b>
            </p>
          
          </Col>
          <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
        </Col> 
    
        </Row>
        <Row style={{ marginTop: "7vw" }}>
        <Col xs={9} md={7}>
            <div style={{ textAlign: "center", padding: "1vh" }}>
              <Image
                src={conference}
                rounded
                style={{ border: "none", height: "auto", width: "100%" }}
              />
            </div>
        </Col> 
        <Col
            style={
              {
                  paddingLeft: "3.0vw",
                //   paddingTop: "1.3vw",
                // "backgroundColor":"red"
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>An app to run your entire event</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            DigitView dedicated organizer app puts everything you need to manage events in the palm of your hand, ensuring when you’re on the event floor you have what you need.</p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/> Offer multiple check-in options</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/>	Print name badges in advance or onsite</b>
            </p>
            <p style={{ textAlign: "left", fontSize: "0.9vw" }}>
              <b><FaCheck color="#0070E6"/>	Control access to sessions and functions</b>
            </p>
          
          </Col>
      
    
        </Row>
      </Container>
    </>
  );
}

export default PcoEvent;
