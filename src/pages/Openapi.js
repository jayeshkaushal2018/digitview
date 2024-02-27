import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import conference from "./../assets/conference_01.jpg";
import { GoDotFill } from "react-icons/go";

function Openapi() {
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
          Build and connect <br />
          your event-tech stack
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
          Keep your events in synch with the rest of your business. Our Open API
          empowers event <br /> planners to seamlessly integrate DigitView with
          your other technology platforms. Connect
          <br /> your events, memberships, customers, teams and more to save
          time, reduce manual errors
          <br /> and improve your attendee’s experience.{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="lg">
            <b>Join early adopters</b>
          </Button>
        </div>
      </div>
      <Container className="container text-center text-md-start mt-5 pb-5">
        <Row
          style={{
            backgroundColor: "#dfe6ea",
            // padding: "6.25vw",
            padding: "3vw",
            marginTop: "9vh",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <Col
            style={{
              //   paddingRight: "2.7vw",
              //   paddingTop: "1.3vw",
              backgroundColor: "white",
              borderRadius: "20px 0px 0px 0px",
              padding: "30px",
              paddingTop: "60px",
              paddingLeft: "60px",
              margin: "10px",
            }}
            xs={7}
            md={4}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>
                {" "}
                Synch your tech <br />
                stack
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Unlock the full potential of your events with our Open API.
              Seamless integrate DigiView with the rest of your business.{" "}
            </p>
            <h1 style={{ textAlign: "left", fontSize: "1.3vw" }}>
              <b> Work smarter. Connect everything.</b>
            </h1>
          </Col>
          <Col
            style={{
              //   paddingRight: "2.7vw",
              //   paddingTop: "1.3vw",
              backgroundColor: "#0070e6",
              color: "white",
              borderRadius: "0px 20px 0px 0px",
              padding: "30px",
              paddingTop: "60px",
              paddingRight: "60px",
              margin: "10px",
            }}
            xs={4}
            md={7}
          >
            
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>
                {" "}
                Plug your entire events <br />
                toolkit into DigiView
              </b>
            </h1>
            <h1 style={{ textAlign: "left", fontSize: "1.5vw" }}>
              {" "}
              <GoDotFill /> CRM <br />
              <GoDotFill /> Accounting <br />
              <GoDotFill /> Memberships <br />
              <GoDotFill /> Marketing <br />
              <GoDotFill /> Sales <br />
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#dfe6ea",
            // padding: "6.25vw",
            padding: "3vw",
            marginTop: "-9vh",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          <Col
            style={{
              //   paddingRight: "2.7vw",
              //   paddingTop: "1.3vw",
              backgroundColor: "#0070e6",
              color: "white",
              borderRadius: "0px 0px 0px 20px",
              padding: "20px",
              margin: "10px",
              paddingLeft: "60px",
            }}
            xs={4}
            md={7}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b> Smart Connectors</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Our Smart Connectors build a foundation of reliable, configurable,
              pre-packaged integrations for every customer.{" "}
            </p>
          </Col>
          <Col
            style={{
              //   paddingRight: "2.7vw",
              //   paddingTop: "1.3vw",
              backgroundColor: "white",
              borderRadius: "0px 0px 20px 0px",
              padding: "20px",
              margin: "10px",
              paddingRight: "60px",
            }}
            xs={7}
            md={4}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>
                {" "}
                Curated, not <br />
                customized
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Our industry-leading API allows you to curate an event ecosystem
              that uplifts, enhances, and innovates your toolkit{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "25vh" }}>
            <div
              style={{
                // backgroundColor: "#dfe6ea",
                // padding: "6.25vw",
                padding: "2vw",
                marginTop: "9vh",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "3.0vw",
                  marginBottom: "1.5vw",
                }}
              >
                Questions you've been asking
              </h1>

              {/* </Col>
          <Col> */}
              <CardGroup>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>
                          Q: “We have in-house developers, what can we do?”{" "}
                        </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        A: In some cases, your developers can use the API
                        developer portal, creating your own integrations and
                        connecting DigiView to the programs that are right for
                        you.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    //   borderStyle: "solid",
                    //   borderWidth: "thin",
                    //   borderColor: "grey",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>
                          Q: “We want you to develop integration solutions for
                          us”{" "}
                        </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        A: Absolutely. We can scope, cost, develop, test,
                        document, and deliver the integrations you need, working
                        with our in-house team and our development partners.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    //   borderStyle: "solid",
                    //   borderWidth: "thin",
                    //   borderColor: "grey",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>
                          Q: “We want off-the-shelf solutions for popular
                          platforms”{" "}
                        </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        A: We have an ever-expanding library of Smart Connectors
                        available. This is your no-code solution for easy,
                        reliable, secure integrations.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vh", marginBottom: "35vh" }}>
          <Col>
            <div
              style={{
                backgroundColor: "white",
                padding: "6.25vw",
                marginTop: "8.vh",
              }}
            >
              <h1 style={{ textAlign: "center", fontSize: "3.8vw" }}>
                Smarter integrations with Smart Connectors
              </h1>
              <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
                Smart Connectors are your no-code solution for easy, reliable,
                <br /> and secure integrations. Smart Connectors will save you
                <br /> hundreds of hours of work as we manage setup and <br />{" "}
                maintenance and continually improve, upgrade, monitor, and{" "}
                <br />
                support your Smart Connectors for you.{" "}
              </p>
              <div style={{ textAlign: "center" }}>
                <Button variant="primary" size="lg">
                  <b>Discover Smart Connect</b>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "25vh" }}>
            <div
              style={{
                // backgroundColor: "#dfe6ea",
                // padding: "6.25vw",
                padding: "2vw",
                marginTop: "0vh",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "3.0vw",
                  marginBottom: "1.5vw",
                }}
              >
                Powering the events
              </h1>

              {/* </Col>
          <Col> */}
              <CardGroup>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "grey",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>In-Person </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        Deliver immersive in-person events with our all-in-one
                        event management platform.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "grey",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>Hybrid </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        Create incredible event experiences for both in-person
                        and remote attendees.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    marginRight: "3.2vw",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "grey",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={conference}
                    style={{ border: "none", borderRadius: "20px" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                        <b>Virtual </b>
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                        Not just a webinar. Engage your attendees with a suite
                        of interactive tools.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
        
         
      </Container>
      <div
              style={{
                backgroundColor: "#dfe6ea",
                padding: "6.25vw",
                marginTop: "8.vh",
              }}
            >
              <h1 style={{ textAlign: "center", fontSize: "4.8vw" }}>
              See the platform <br/> in action
              </h1>
              <p style={{ textAlign: "center", fontSize: "1.2vw" }}>
              Add new factor to your next event. Find out how DigiView can power your success.
           </p>
              <div style={{ textAlign: "center" }}>
                <Button variant="primary" size="lg">
                  <b>Request a demo</b>
                </Button>
              </div>
            </div>
    </>
  );
}

export default Openapi;
