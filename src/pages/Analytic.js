import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import effortless from "./../assets/Effortless.png";
import Quotes from "../components/Quotes";
import DashBoard from "./../assets/Dashboard.png";
import DataImage from "./../assets/data.png";
import admin from "./../assets/admin.png";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Valuable from './../assets/valuable.png';
import { CgSmileSad } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import { HiMiniBookOpen } from "react-icons/hi2";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function Analytic() {
  // let Quote ="Q12342"
  // let date =  "6/5/2024"
  // let part = " 124-FDGDGD"
  // let status = "loading"
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
          Meaningful event data,
          <br /> analytics & insights
        </h1>
        <p style={{ textAlign: "center", fontSize: "0.9vw" }}>
          Every event planner needs great data to deliver even greater events.
          DigitView provides expansive reporting, event <br /> analytics, and
          robust filtering capabilities, ensuring you have a single source of
          truth for accessing and harnessing <br /> the most meaningful event
          data{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ width: "10vw" }}
          >
            <p style={{ textAlign: "center", fontSize: "1vw" }}>
              <b>Get a touch</b>
            </p>
          </button>
        </div>
      </div>
      <Container className="container text-center text-md-start mt-5 pb-5">
        <Row style={{ marginTop: "7vw" }}>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
            }}
            sm={6}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>
                {" "}
                Effortless event reporting, for <br /> almost anything
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Dive into a treasure trove of more than 150 purpose-built reports
              designed with event management in mind. With this vast resource,
              you can efficiently track everything from registrations and
              sponsorships to accommodations and financials, all in a matter of
              minutes. We're aware that every event is unique, so our reporting
              system is flexible. You can filter, personalize, edit, and create
              custom report templates that suit any event you host.{" "}
            </p>
          </Col>
          <Col sm={6}>
            <div style={{ textAlign: "center", paddingTop: "10%" }}>
              <Image src={effortless} rounded style={{ border: "none" }} />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vw" }}>
          <Col sm={6}>
            <div style={{ textAlign: "center", paddingTop: "8%" }}>
              <Image src={DashBoard} rounded style={{ border: "none" }} />
            </div>
          </Col>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
            }}
            sm={6}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>Track the metrics that matter</b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Monitor and analyze all relevant event metrics with a dashboard
              designed specifically for you. Tailor your dashboard to perfection
              by choosing from a wide range of widgets, ensuring you stay on top
              of the essential event data you're looking for. The best part?
              Easily track progress against targets and maintain a single source
              of truth{" "}
            </p>
          </Col>
        </Row>
        {/* <Row>
            <Col>
            <Quotes quote={" Q12342"} part={"124-FDGDGD"} date={"6/5/2024"} status={""}/>
            </Col>
        </Row> */}
        <Row style={{ marginTop: "7vw" }}>
          <Col
            style={{
              paddingRight: "2.7vw",
              paddingTop: "1.3vw",
            }}
            sm={6}
          >
            <h1 style={{ textAlign: "left", fontSize: "2.7vw" }}>
              <b>
                {" "}
                Synchronized <br /> data sharing in <br /> real-time
              </b>
            </h1>
            <p style={{ textAlign: "justify", fontSize: "1.1vw" }}>
              Stay ahead of the curve by capturing invaluable event insights in
              real-time. Whether you need to relay attendee numbers to your
              vendor or accommodate last-minute dietary preferences, we've got
              your back. Ensure you have the most precise, up-to-the-minute data
              at your fingertips throughout your event. And, securely share
              reports and sync real-time data with clients, sponsors, and
              vendors.{" "}
            </p>
          </Col>
          <Col sm={6}>
            <div style={{ textAlign: "center", paddingTop: "0%" }}>
              <Image src={admin} rounded style={{ border: "none" }} />
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
                  <HiMiniBookOpen size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Extensive reporting </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Gain access to our extensive library of 150+ pre-made reports. From registrations and functions to travel arrangements and finances, we've got you covered.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <MdOutlineElectricBolt size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Build once, use always</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Create custom reports that work for all your events. No need to repeat the same tasks – let your templates handle the heavy lifting.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <FaEdit size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Tailor-made reporting</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Tailor reports to your liking by adding, removing, or merging data fields. Style your reports with different fonts, colors, logos, images, or watermarks.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "1vw",
          }}
        >
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoMdCloudUpload size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Data exports made simple </b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Effortlessly export your data into various formats, such as Excel, PDF, CSV, or other popular file types. We make sharing your insights a breeze
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <IoIosSettings size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Custom data combinations</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Export the precise data combinations you need for in-depth analysis and reuse them whenever you require
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18.2vw", height: " 15vw" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <MdOutlineSecurity size={"2.5vw"} color="#0070e6" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p style={{ fontSize: "1.2vw", textAlign: "center" }}>
                    <b>Secure and compliant</b>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <p style={{ fontSize: "0.8vw", textAlign: "center" }}>
                  Rest easy with our full compliance with GDPR, CCPA, and other security regulations. You'll enjoy secure, trackable access to all your reports
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
              <b>
              Data-driven event <br/> excellence
              </b>
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
            Dive deep into your event data to uncover hidden <br/> trends and opportunities, ensuring every event is <br/> better than the last <br/>

Our reports provide the knowledge you need to <br/>make data-backed decisions that drive your events <br/> to new heights.
            </p>
          </Col>
        </Row>
        <Row style={{ "marginBottom":'30vw' ,"marginTop":"60px"}}>
          <Col style={{  textAlign: "left" ,"marginLeft":"40px"}}>
            <Card style={{ width: "95%" }}>
              <Card.Img
                variant="top"
                src={DataImage}
                style={{ "border": "none" ,"width":"500px","height":"400px"}}
                 backgroundColor =" blue"
              />
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                 <h4><b>CURRENT EVENT ANALYTICS</b></h4>
                </Card.Title>
                <Card.Text style={{"fontSize":"40px"}}>
                  <b>Data disarray.</b>
                </Card.Text>
                <Card.Text style={{"fontSize":"20px"}}>
                  <p>Many event organizers struggle with collecting, managing, and making sense of data for their events. The process can be chaotic, time-consuming, and error-prone.
                  </p>
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item  style={{"border":"none"}}><CgSmileSad color ={'red'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "Report creation is a time-consuming manual task"</b></ListGroup.Item>
                  <ListGroup.Item  style={{"border":"none"}}><CgSmileSad color ={'red'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "Our data is scattered across various platforms"</b></ListGroup.Item>
                  <ListGroup.Item  style={{"border":"none"}}><CgSmileSad color ={'red'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "We often encounter data inaccuracies"</b></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card style={{ width: "95%" }}>
              <Card.Img
                variant="top"
                src={Valuable}
                style={{ "border": "none" ,"width":"500px","height":"400px"}}
                
              />
              <Card.Body>
                <Card.Title style={{ color: "#0070E6" }}>
                 <h4><b>WITH DIGIVIEW</b> </h4>
                </Card.Title>
                <Card.Text style={{"fontSize":"40px"}}>
                  <b>Valuable insights.</b>
                </Card.Text>
                <Card.Text style={{"fontSize":"20px"}}>
                  <p>DataView centralizes all your event data and reporting, streamlining the process for you. This allows you to focus on making data-driven decisions and delivering valuable insights to enhance your event</p>
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item  style={{"border":"none"}}><HiOutlineEmojiHappy color ={'#0070E6'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "All event data is consolidated in one place"</b></ListGroup.Item>
                  <ListGroup.Item  style={{"border":"none"}}><HiOutlineEmojiHappy color ={'#0070E6'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "Reports are generated effortlessly and accurately"</b></ListGroup.Item>
                  <ListGroup.Item  style={{"border":"none"}}><HiOutlineEmojiHappy color ={'#0070E6'}  size ={'2rem'} /><b style={{"fontSize":"16px"}}> "Data-driven decision-making is now a breeze"</b></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Analytic;
