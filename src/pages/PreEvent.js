import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import image1 from "../images/budget allocation/first.svg";
import image2 from "../images/budget allocation/second.jpg";
import { AiTwotoneDollar } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa6";
import EventFeatureIcon from "../components/EventFeatureIcon";
const images = [{ url: image1 }, { url: image2 }];
function PreEvent() {
  return (
    <>
      <Breadcrumb
        value1={"Our Service"}
        value2={" Pre Event"}
        value3={""}
        value4={"/pre-event"}
      />
      <div
        style={{ marginBottom: "150px", marginTop: "1px", marginLeft: "350px" }}
      >
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <ImageSlider
              marginLeft={"100px"}
              marginTop={"45px"}
              width={1200}
              height={504}
              images={images}
              showBullets={"true"}
              showNavs={"true"}
              autoPlay={"true"}
              autoPlayDelay={3.0}
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "150px", marginTop: "150px" }}>
        <div className="row" >
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-12" >
                <h2
                  className="fs-1 mb-5  fw-bold"
                  style={{ color: "#3d9efa", paddingTop: "15px" }}
                >
                  Pre Event Features
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h2 className="fs-4"></h2>
              </div>
              <div className="col-lg-8" >
                <h2 className="fs-4" style={{ color: "#808080" }}>
                  DigiView powerful tools and workflows make it easy to plan
                  your events, including managing presenters, exhibitors and
                  sponsors, and to reach new promotional heights with integrated
                  marketing features.
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
            link={"/budget"}
            content={"Budget Allocation"}
            icon={<AiTwotoneDollar size={"5rem"} />}
          />

          <EventFeatureIcon
            link={"/ticket"}
            content={"Ticket Purchase"}
            icon={<IoTicket size={"5rem"} />}
          />

          <EventFeatureIcon
            link={"/rspv"}
            content={"RSPV Management"}
            icon={<FaBookReader size={"5rem"} />}
          />

          <EventFeatureIcon
            link={"/Promotion"}
            content={"Pre-event Promotion"}
            icon={<FaAdversal size={"5rem"} />}
          />

          <EventFeatureIcon
            link={"/vendor"}
            content={"Vendor Management"}
            icon={<FaBookReader size={"5rem"} />}
          />
        </div>
      </div>
    </>
  );
}

export default PreEvent;
