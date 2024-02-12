import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../images/networking/download (1).jpg";
import image2 from "../images/networking/download.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
// import { AiTwotoneDollar } from "react-icons/ai";
// import { FaAdversal } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6"
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Networking = () => {
  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
              <p style={{ fontWeight: "bold", }}>Our Service <FaAngleRight /> During Event <FaAngleRight /></p><p style={{ "color": "#0778e2", "fontWeight": "bold" }}>NETWORKING ROOMS</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "300px", marginTop: "100px" }}>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
              <div
                className="col-lg-2"
                style={{ background: "#fff", paddingTop: "7px" }}
              >
                {" "}
                <FaCommentAlt size={70} color="#3c85c9" />
              </div>
              <div className="col-lg-10">
                <h2
                  className="fs-1 mb-5 text-uppercase fw-bold"
                  style={{ color: "#3c85c9", paddingTop: "15px" }}
                >
                  Networking rooms
                </h2>
              </div>
            </div>
            <h4 style={{ paddingLeft: "100px", color: "#808080" }}>
              Interaction among attendees provides participants a platform to
              engage and establish meaningful connections with one another,
              fostering collaboration and professional relationships. Digiview
              offers interactive networking tools to facilitate meaningful
              connections among attendees.
            </h4>
          </div>
          <div className="col-lg-5 d-flex justify-content-center d-none d-lg-flex">
            <img
              src={AboutUs}
              className="img-fluid w-55"
              alt="about img"
              style={{ "border-color": "white" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Networking;
