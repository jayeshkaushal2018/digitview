import React from "react";
import "./Home.css";
import AboutImg from "../assets/aboutus.png";
import { Link } from "react-router-dom";
import HomeImg from "../assets/homepagesecond.jpg";
import { ContactInfo } from "../components/ContactInfo";
import ContactImage from "../assets/contactus.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container">
          <Container>
            {/* <div className='row'> */}
            <Row>
              {/* <div className='col-sm-5 d-flex d-sm-block flex-column align-items-center' style={{"paddingTop":"50px"}} > */}
              <Col xs={7} md={5}>
                <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                  {" "}
                  <p className="text-primary" style={{ "font-size": "5vw" }}>
                    DigiView
                  </p>
                  <p style={{ color: "#606060", "font-size": "4vw" }}>
                    Event
                    <br /> Management <br />
                    Platform
                  </p>
                </h1>
                {/* <MenuBtn /> */}
              </Col>
              {/* </div> */}
              {/* <div className='col-sm-7 d-flex d-sm-block flex-column align-items-center' style={{"borderRadius":"8px"}}> */}
              <Col xs={11} md={7}>
                <img
                  src={HomeImg}
                  className="img-fluid w-55"
                  alt="about img"
                  style={{ mixBlendMode: "multiply", border: "none" }}
                />
              </Col>
              {/* </div> */}
            </Row>
          </Container>
          {/* </div> */}
        </div>
      </header>

      <div className="about_us py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img src={AboutImg} className="img-fluid w-50" alt="about img" style={{"border":"none" , "mixBlendMode": "multiply"}}/>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident voluptate aut dolore ullam quasi numquam quod
                molestias cum officiis perspiciatis?
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                magni animi tenetur eaque vel accusamus placeat quaerat ad.
                Similique quaerat qui doloribus assumenda deserunt tenetur quas
                suscipit officiis quod sequi?
              </p>

              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ width: 200 }}
                >
                  <b>More About Us</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-left">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">
            Powering the wow in events
          </h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">
                    A powerful and centralized platform with the tools and
                    processes you need to manage all aspects of your events,
                    from start to finish.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow"></div>

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid w-55" alt="" style={{"borderRadius":"80px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
