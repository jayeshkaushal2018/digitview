import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../images/audience management/download (1).jpg";
import image2 from "../images/audience management/download.jpeg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { FaAngleRight } from "react-icons/fa6"
import { FaBookReader } from "react-icons/fa";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const AudienceData = () => {
  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
              <p style={{ fontWeight: "bold", }}>Our Service <FaAngleRight /> Post Event <FaAngleRight /></p><p style={{ "color": "#0778e2", "fontWeight": "bold" }}>AUDIENCE DATABASE MANAGEMENT</p>
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
                <FaBookReader size={70} color="#3c85c9" />
              </div>
              <div className="col-lg-10">
                <h2
                  className="fs-1 mb-5 text-uppercase fw-bold"
                  style={{ color: "#3c85c9", paddingTop: "15px" }}
                >
                  Audience Database Management
                </h2>
              </div>
            </div>
            <h4 style={{ paddingLeft: "100px", color: "#808080" }}>
              Audience database management collecting,
              organizing, and maintaining data related to an organization's
              audience or customer base. This data typically includes
              information such as demographics, contact details, preferences,
              behavior patterns, and interactions with the organization
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

export default AudienceData;
