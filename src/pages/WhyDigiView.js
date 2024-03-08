import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeImg from "../utils/img/header-img.jpg";
import Harmonious from "./../assets/harmonious.png";
import Dynamic from "./../assets/dynamic.png";
import Queenland from "./../assets/queenland_university.png";
import GlobalEvent from "./../assets/globalevent.png";
import International from "./../assets/international.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import Optimized from "./../assets/optimized.png";
import Integrate from "./../assets/integrate.png";
import { MdDateRange } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { FaAngleDown } from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { TbTableShare } from "react-icons/tb";
import Image from "react-bootstrap/Image";
const WhyDigiView = () => {
  const navigate = useNavigate("/demo");

  const getDemo = () => {
    navigate("/demo");
  };
  return (
    <>
      <Container style={{"marginBottom":"50px"}}>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "2vw",
            marginTop: "6vw",
            padding: "2vw",
          }}
        >
          <Col  md={6}>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              <p style={{ color: "#606060", "font-size": "3vw" }}>
                Why do event
              </p>
              <p style={{ color: "#0070e6", "font-size": "3vw" }}>
                leaders choose
              </p>
              <p style={{ color: "#606060", "font-size": "3vw" }}>DigiView ?</p>
            </h1>
            <p
              className="mb-5  text-center text-sm-start"
              style={{ color: "#606060", "font-size": "1vw" }}
            >
              DigiView is built for serious event professionals. Discover an
              event management solution that uplifts and optimizes your
              day-to-day, empowering you and your team to deliver more
              outstanding events.
            </p>

            <Button
              variant="outline-primary"
              className="px-4 py-2"
              onClick={getDemo}
              style={{
                background: "#0070e6",
                color: "white",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <Link href="/demo" className="text-light">
                <b>
                  Get a demo <HiMiniComputerDesktop />
                </b>
              </Link>
            </Button>
          </Col>
          <Col  md={6}>
            <Image src={HomeImg} rounded style={{ mixBlendMode: "multiply", border: "none" , height:"75vh" }} />
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "60px" }}>
          <Col>
            <Card
              style={{
                width: "55rem",
                marginLeft: "15vw",
                "background-color": "#fff",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "2.5vw", color: "#606060" }}>
                  Serious event planners need a serious event management
                  platform to support them. This is why our customers trust
                  DigiView.
                </Card.Title>
                <FaAngleDown color="#0070e6" size="5.5rem" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "60px" }}>
          <Col>
            <Card
              style={{
                width: "55rem",
                marginLeft: "15vw",
                "background-color": "#f1f5f9",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "2.5vw", color: "#606060" }}>
                  One platform for everything events
                </Card.Title>

                <Card.Text style={{ fontSize: "1vw" }}>
                  <p>
                    DigiView is built for serious event professionals. Discover
                    an
                    <br />
                    event management solution that uplifts and optimizes your
                    <br />
                    day-to-day, empowering you and your team to deliver more
                    <br />
                    outstanding events.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "60px" }}>
          <Col>
            <Card
              style={{
                width: "55rem",
                marginLeft: "15vw",
                "background-color": "#f1f5f9",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "2.5vw", color: "#606060" }}>
                  We match your passion and dedication to events
                </Card.Title>

                <Card.Text style={{ fontSize: "1vw" }}>
                  Since 1985, Amitron has provided high quality printed circuit
                  boards with remarkable speed and customer service. As one of
                  the largest and most experienced printed circuit board
                  manufacturers around, we take great pride in delivering
                  world-class products and customer service. Our high-quality
                  multilayer, double-sided and single sided PCB are supported by
                  a dedicated staff with experience in all aspects of the PCB
                  industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "60px" }}>
          <Col>
            <Card
              style={{
                width: "55rem",
                marginLeft: "15vw",
                "background-color": "#f1f5f9",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "2.5vw", color: "#606060" }}>
                  Transparent and reliable
                </Card.Title>

                <Card.Text style={{ fontSize: "1vw" }}>
                  No matter where your organization is in its event management
                  journey, we want to ensure you feel excited and empowered to
                  exceed your goals. Your success is truly our success. We also
                  keep our pricing simple, giving you unlimited registrations.
                  Rest assured, your success won’t dent your budget – it’s a
                  win-win.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            marginTop: "6vw",
            padding: "2vw",
          }}
        >
          <Col xs={7} md={5}>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              <p style={{ color: "#0070e6", "font-size": "3vw" }}>
                A harmonious, native solution
              </p>
            </h1>
            <p
              className="mb-5  text-center text-sm-start"
              style={{ color: "black", "font-size": "1vw" }}
            >
              We’re committed to providing you with a native event toolkit. We
              want to eliminate the need for juggling disconnected data and
              disparate tech with a true all-in-one platform. With DigiView, you
              can manage all your event planning in one place. Accommodation,
              budgets, travel, abstracts, sponsors, marketing, exhibitors,
              agendas, inventory, dietary requirements, and so, so much more.
            </p>
          </Col>
          <Col xs={11} md={7}>
            <img
              src={Harmonious}
              className="img-fluid w-55"
              alt="about img"
              style={{ mixBlendMode: "luminosity", border: "none" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            marginTop: "6vw",
            padding: "2vw",
          }}
        >
          <Col xs={11} md={7}>
            <img
              src={Dynamic}
              className="img-fluid w-55"
              alt="about img"
              style={{ mixBlendMode: "luminosity", border: "none" }}
            />
          </Col>
          <Col xs={7} md={5}>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              <p style={{ color: "#0070e6", "font-size": "3vw" }}>
                We love dynamic and complex
              </p>
            </h1>
            <p
              className="mb-5  text-center text-sm-start"
              style={{ color: "black", "font-size": "1vw" }}
            >
              Events can be elaborate and demanding. But, we've built DigiView
              to evolve alongside you. Whether it’s a multi-track conference,
              intricate trade show, or even a sophisticated educational summit,
              EventsAir dynamically scales to match your unique demands. Our
              comprehensive suite of tools allow you to remain flexible in event
              delivery. Create a truly customized DigiView experience, or
              replicate your success – whatever you need.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            marginTop: "6vw",
            padding: "2vw",
          }}
        >
          <Col xs={7} md={5}>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              <p style={{ color: "#0070e6", "font-size": "3vw" }}>
                Optimized ROI that is relevant to you
              </p>
            </h1>
            <p
              className="mb-5  text-center text-sm-start"
              style={{ color: "black", "font-size": "1vw" }}
            >
              With tools aimed at attracting more attendees, boosting
              engagement, and amplifying sponsor satisfaction, DigiView ensures
              that every step of your event lifecycle contributes to meaningful
              and measurable returns. We also work hard to understand your
              revenue streams. Why? Because we want to optimize your platform to
              track, hit, and easily exceed your event goals with the most
              relevant features.
            </p>
          </Col>
          <Col xs={11} md={7}>
            <img
              src={Optimized}
              className="img-fluid w-55"
              alt="about img"
              style={{ mixBlendMode: "luminosity", border: "none" }}
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "60px" }}>
          <Col>
            <Card
              style={{
                width: "55rem",
                marginLeft: "15vw",
                "background-color": "#fff",
                border: "none",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "2.5vw", color: "#606060" }}>
                  Our customers deliver successful, inspiring events with
                  DigiView
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            padding: "2vw",
            paddingTop:'0px',
            height: "45rem",
            marginTop:"-180px"
          }}
        >
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              <Card.Img
                variant="top"
                src={Queenland}
                style={{
                  border: "none",
                  filter: "blur(.30rem)",
                  width: "23rem",
                  height: "15rem",
                }}
              />
              <Card.Body style={{ marginBottom: "-21px" }}>
                <Card.Text style={{ color: "#0070e6" }}>
                  <h5>
                    <b>The University of Queensland</b>
                  </h5>
                </Card.Text>
              </Card.Body>
              <ListGroup
                className="list-group-flush"
                style={{ border: "none" }}
              >
                <ListGroup.Item style={{ border: "none" }}>
                  {" "}
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> University
                  Open Day for 25,000 prospective students pivoted to virtual
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Hosted
                  1400+ exhibitors in an immersive virtual hall
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Reached
                  attendees from 100+ countries and welcoming space for
                  international students
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              <Card.Img
                variant="top"
                src={GlobalEvent}
                style={{
                  border: "none",
                  filter: "blur(.30rem)",
                  width: "23rem",
                  height: "15rem",
                }}
              />
              <Card.Body style={{ marginBottom: "-21px" }}>
                <Card.Text style={{ color: "#0070e6" }}>
                  <h5>
                    <b>Global Events</b>
                  </h5>
                </Card.Text>
              </Card.Body>
              <ListGroup
                className="list-group-flush"
                style={{ border: "none" }}
              >
                <ListGroup.Item style={{ border: "none" }}>
                  {" "}
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Seamlessly
                  facilitated 1200+ check-ins across four hours
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Achieved an
                  outstanding attendee satisfaction rated 4.94 out of 5
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Provided a
                  user-friendly and welcoming space for international students
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              <Card.Img
                variant="top"
                src={International}
                style={{
                  border: "none",
                  filter: "blur(.30rem)",
                  width: "23rem",
                  height: "15rem",
                }}
              />
              <Card.Body style={{ marginBottom: "-21px" }}>
                <Card.Text style={{ color: "#0070e6" }}>
                  <h5>
                    <b>Academy of International Business</b>
                  </h5>
                </Card.Text>
              </Card.Body>
              <ListGroup
                className="list-group-flush"
                style={{ border: "none" }}
              >
                <ListGroup.Item style={{ border: "none" }}>
                  {" "}
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Virtual
                  conference with 50+ sessions
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Hosted a
                  total of 1225 attendees (second-highest attendance in history)
                </ListGroup.Item>
                <ListGroup.Item style={{ border: "none" }}>
                  <FaRegCircleCheck color="#0070e6" size="1.5rem" /> Launched an
                  effective Meeting Hub to connect delegates and amplify
                  networking
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            marginTop: "6vw",
            padding: "2vw",
          }}
        >
          <Col xs={7} md={5}>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              <p style={{ color: "#0070e6", "font-size": "3vw" }}>
                Integrate DigiView with your favorite tools
              </p>
            </h1>
            <p
              className="mb-5  text-center text-sm-start"
              style={{ color: "black", "font-size": "1vw" }}
            >
              DigiView integrates with the tools you rely on every day to work
              more efficiently. Our industry-leading API empowers you to curate
              a bespoke event ecosystem that saves time and allows for truly
              delightful experiences. And, if you’re looking for a library of
              reliable, configurable, pre-packaged integrations – our Smart
              Connectors are for you.
            </p>
          </Col>
          <Col xs={11} md={7}>
            <img
              src={Integrate}
              className="img-fluid w-55"
              alt="about img"
              style={{ mixBlendMode: "luminosity", border: "none" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            "background-color": "#f1f5f9",
            borderRadius: "20px",
            padding: "2vw",
            height: "42rem",
            marginTop: "4vw",
          }}
        >
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              {/* <Card.Img variant="top" src={Queenland} style={{"border":"none","filter":"blur(.30rem)","width":"23rem","height":"15rem"}}/> */}
              <Card.Body style={{ marginBottom: "-21px" }}>
                  
                  
                <Card.Title style={{ color: "#0070e6" }}>
                    <p ><MdDateRange size="4rem" /></p>
                
                  <h4>
                    <b>Pre-Event</b>
                  </h4>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  <p>
                    From streamlined budgeting and inventory control, to
                    curating abstracts and presentations, DigiView all-in-one
                    event management software makes the initial stages of
                    planning easy.
                  </p>
                </Card.Text>
                <ListGroup
                  className="list-group-flush"
                  style={{ border: "none" }}
                >
                  <ListGroup.Item style={{ border: "none" }}>
                    {" "}
                    <FaCheck color="#0070e6" size="1.5rem" /> Budget Allocation
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Ticket Purchase
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> RSPV Management
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Pre-event
                    Promotion
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Vendor Management
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              {/* <Card.Img variant="top" src={Queenland} style={{"border":"none","filter":"blur(.30rem)","width":"23rem","height":"15rem"}}/> */}
              <Card.Body style={{ marginBottom: "-21px" }}>
                <Card.Title style={{ color: "#0070e6" }}>
                  <p><FaRocket size="4rem" /></p>
                  <h4>
                    <b>During-eventt</b>
                  </h4>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  <p>
                    DigiView makes it easy to attendees with features to
                    simplify check-in, deliver great content, drive meaningful
                    engagement, and create a truly impactful event experience.{" "}
                  </p>
                </Card.Text>
                <ListGroup
                  className="list-group-flush"
                  style={{ border: "none" }}
                >
                  <ListGroup.Item style={{ border: "none" }}>
                    {" "}
                    <FaCheck color="#0070e6" size="1.5rem" /> Attendees
                    Management
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Networking Rooms
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Video BroadCasting
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Virtual
                    Communication
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Live Event Status
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: "40px" }}>
            <Card style={{ width: "24rem", paddingTop: "0px" }}>
              {/* <Card.Img variant="top" src={Queenland} style={{"border":"none","filter":"blur(.30rem)","width":"23rem","height":"15rem"}}/> */}
              <Card.Body style={{ marginBottom: "-21px" }}>
                <Card.Title style={{ color: "#0070e6" }}>
                  <p><TbTableShare size="4rem" /></p>
                  <h4>
                    <b>Post-Event</b>
                  </h4>
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  <p>
                    DigiView provides a suite of post-event features so you can
                    analyze performance, consistently build better events, and
                    maximize your ROI, so you can continue to learn and thrive
                  </p>
                </Card.Text>
                <ListGroup
                  className="list-group-flush"
                  style={{ border: "none" }}
                >
                  <ListGroup.Item style={{ border: "none" }}>
                    {" "}
                    <FaCheck color="#0070e6" size="1.5rem" /> Post Event
                    Promotion
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Event Recording
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Audience Database
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Clone Events
                    management
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none" }}>
                    <FaCheck color="#0070e6" size="1.5rem" /> Feedback status
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyDigiView;
