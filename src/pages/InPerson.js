import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import conference from "./../assets/conference_01.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const InPerson = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#dfe6ea",
          padding: "6.25vw",
          marginTop: "9vh",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
          More memorable <br /> in-person events
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
          Our leading in-person event management platform <br /> has been
          bringing people together{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="lg">
            <b>Get a demo</b>
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
              <b> Leading event technology</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              We set up one of the first platforms to help planners automate
              event registration, and have always been at the forefront of
              technology in the events arena. We're proud of how we've helped
              thousands of event planners connect millions of attendees,
              speakers, exhibitors and sponsors around the globe using our live,
              virtual and hybrid technologies.{" "}
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
        <Row style={{ marginTop: "2.5vw" }}>
          <Col
            style={{
              paddingRight: "4vw",
            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "2.7vw" }}>
              <b>
                The in-person <br />
                journey
              </b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
              We're with you every step of the way, helping <br />
              manage your attendee journey to enable and <br /> enhance their
              experience, before, during, and <br />
              after your event.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "0.0vw" }}>
          <Col
            style={{
              paddingRight: "4vw",
            }}
          >
            <CardGroup>
              <Card style={{ marginRight: "30px" ,border: "none" }}>
                <Card.Img
                  variant="top"
                  src={conference}
                  style={{ border: "none" ,"borderRadius":'20px' }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ textAlign: "center", fontSize: "30px" }}
                    class="text-primary"
                  >
                    Enable
                  </Card.Title>
                  <Card.Title style={{ textAlign: "center" }}>
                    Travel management
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Manage and track flight information and provide your
                    attendees with comprehensive itineraries.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                    Accommodation
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Request and record attendee requirements and allow hotels to
                    manage bookings and run reports via a dedicated portal.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                    Interactive floor plans
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Build interactive seating and trade show plans that let
                    users select their own preferences online.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                    Budgeting made easy
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Track your spending against event budgets with real-time
                    dashboards and reporting.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "30px" ,border: "none"}}>
                <Card.Img
                  variant="top"
                  src={conference}
                  style={{ border: "none", "borderRadius":'20px'}}
                />
                <Card.Body>
                  <Card.Title
                    style={{ textAlign: "center", fontSize: "30px" }}
                    class="text-primary"
                  >
                    Engage
                  </Card.Title>
                  <Card.Title style={{ textAlign: "center" }}>
                  Onsite self check-in
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Streamline attendee arrival with intuitive onsite check-in for a quick and seamless experience.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  Mobile experience
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Create mobile apps to provide the ultimate digital experience and keep attendees engaged.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  Game time
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Reward your most engaged attendees with points and prizes for participating online and onsite.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  One-to-one meetings
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Set up one-to-one meetings with buyers and suppliers via online portals.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "30px",border: "none" }}>
                <Card.Img
                  variant="top"
                  src={conference}
                  style={{ border: "none" , "borderRadius":'20px' }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ textAlign: "center", fontSize: "30px" }}
                    class="text-primary"
                  >
                    Enhance
                  </Card.Title>
                  <Card.Title style={{ textAlign: "center" }}>
                  Lead capture
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Give exhibitors the power to capture lead details and responses to qualifying questions using the mobile app.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  Session surveys
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Prepare online surveys to collect feedback from your event attendees and analyze your success.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  Return on spend
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Visualize every dollar spent against multiple financial models to maximize your returns.
                  </Card.Text>
                  <Card.Title style={{ textAlign: "center" }}>
                  Custom reporting
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                  Make smarter business decisions informed by over 120 included reports, or build your own.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row style={{ marginTop: "25vw" }}>
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
              <b> Powerful onsite tools for every event</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            Streamline your event check-in effortlessly with DigitView onsite tools. Leverage self check-in, staffed check-in, or Bluetooth assisted check-in to ensure a swift and hassle-free experience. Our tools also support beacon, QR code, and name search options, offering greater flexibility.
            <br/>DigitView connects with our trusted partners to provide seamless name badge printing, ensuring you can manage all your check-in services from one centralized system.</p>
           <div style={{ textAlign: "center" }}>
          
        </div>
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
        <Row style={{ marginTop: "5vw" }}>
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
                //   paddingRight: "2.7vw",
                //   paddingTop: "1.3vw",
              }
            }
            xs={7}
            md={5}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b> Need help setting up your event ? </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
            <h1 style={{ textAlign: "left", fontSize: "1.35vw" }}>
               Let us do the heavy lifting.
            </h1>
             Save your precious time, so you can focus on delivering memorable events. We offer everything from building engaging websites and attendee apps, right through to customized smart registration and a range of portals.
           </p>
           <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="lg">
            <b>Find out more</b>
          </Button>
        </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          backgroundColor: "#dfe6ea",
          padding: "6.25vw",
          marginTop: "9vh",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
        See the platform <br /> in action
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
         Find out how EventsAir can power your success.{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="lg">
            <b>Get a demo</b>
          </Button>
        </div>
      </div>
    </>
  );
};

export default InPerson;
