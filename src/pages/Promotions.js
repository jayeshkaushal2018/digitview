import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../images/promotions/download.jpg";
import image2 from "../images/promotions/download (2).jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
// import { AiTwotoneDollar } from "react-icons/ai";
import { FaAdversal } from "react-icons/fa6";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Promotions = () => {
  return (
    <>
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
                <FaAdversal size={70} color="#3c85c9" />
              </div>
              <div className="col-lg-10">
                <h2
                  className="fs-1 mb-5 text-uppercase fw-bold"
                  style={{ color: "#3c85c9", paddingTop: "15px" }}
                >
                   &nbsp; Promotions
                </h2>
              </div>
            </div>
            <h4 style={{ paddingLeft: "100px", color: "#808080" }}>
              Promotions Management empowers event organizers to effectively
              promote their events and engage attendees through targeted
              marketing efforts. DigiView offers a range of promotional tools
              and features
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

export default Promotions;
