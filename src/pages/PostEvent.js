import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import image1 from "../images/budget allocation/first.svg";
import image2 from "../images/budget allocation/second.jpg";
import { FaBookReader } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { FaClone } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import EventFeatureIcon from "../components/EventFeatureIcon";
const images = [{ url: image1 }, { url: image2 }];
function PostEvent() {
  return (
    <>
      <Breadcrumb value1={"Our Service"} value2={" Post Event"} value3={""} />
      <ImageSlider
        marginLeft={"400px"}
        marginTop={"45px"}
        width={1200}
        height={504}
        images={images}
        showBullets={"true"}
        showNavs={"true"}
        autoPlay={"true"}
        autoPlayDelay={3.0}
      />
      <div style={{ marginBottom: "150px", marginTop: "150px" }}>
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  className="fs-1 mb-5  fw-bold"
                  style={{ color: "#3d9efa", paddingTop: "15px" }}
                >
                  Post Event Features
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h2 className="fs-4"></h2>
              </div>
              <div className="col-lg-8" >
                <h2 className="fs-4" style={{ color: "#808080" }}>
                DigiView makes it easy to maximize your investment, share your content, and drive further ROI for sponsors and exhibitors with a suite of post-event features.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginLeft: "20%",
            marginRight: "20%",
            borderRadius: "15px",
            paddingLeft: "10%",
            paddingTop: "5%",
            paddingBottom: "5%",
            marginTop: "40px",
            backgroundColor: "#dfe6ea",
          }}
        >
          <EventFeatureIcon
            content={"Post Event Promotion"}
            link={"/post-promotion"}
            icon={<FaBookReader size={"5rem"} />}
          />

          <EventFeatureIcon
            content={"Event Recording"}
            link={"/event-recording"}
            icon={<BsCameraReelsFill size={"5rem"} />}
          />

          <EventFeatureIcon
            content={"Audience Database "}
            link={"/audience-data"}
            icon={<FaDatabase size={"5rem"} />}
          />

          <EventFeatureIcon
            content={"Clone Events management"}
            link={"/clone-event"}
            icon={<FaClone size={"5rem"} />}
          />

          <EventFeatureIcon
            content={"Feedback status"}
            link={"/feedback"}
            icon={<MdFeedback size={"5rem"} />}
          />
        </div>
      </div>
    </>
  );
}

export default PostEvent;
