import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../images/post event promotions/Screenshot-2023-08-16-at-3.02.41-PM.png";
import image2 from "../images/post event promotions/images.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { AiTwotoneDollar } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const PostPromotion = () => {
  return (
    <>
    <div style={{ marginTop: "90px" }}>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
             <p style={{fontWeight:"bold",}}>Our Service <FaAngleRight /> Post Event <FaAngleRight /></p><p style={{"color":"#0778e2", "fontWeight":"bold"}}>POST EVENT PROMOTIONS</p>
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
                  Post event promotions 
                </h2>
              </div>
            </div>
            <h4 style={{ paddingLeft: "100px", color: "#808080" }}>
              Promotions Management empowers event organizers to effectively
              promote their events and engage attendees through targeted
              marketing efforts. DigiView offers a range of promotional tools
              and features, including
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

export default PostPromotion;
