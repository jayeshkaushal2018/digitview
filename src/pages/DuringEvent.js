import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import image1 from "../images/budget allocation/first.svg";
import image2 from "../images/budget allocation/second.jpg";
import { FaBookReader } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiPowervirtualagents } from "react-icons/si";
import EventFeatureIcon from "../components/EventFeatureIcon";
import { RiLiveLine } from "react-icons/ri";
const images = [{ url: image1 }, { url: image2 }];
function DuringEvent() {
  return (
    <>
      <Breadcrumb value1={"Our Service"} value2={"During Event"} value3={""} />
      <div
        style={{ marginBottom: "150px", marginTop: "1px", marginLeft: "350px" }}
      >
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
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
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "150px", marginTop: "150px" }}>
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  className="fs-1 mb-5  fw-bold"
                  style={{ color: "#3d9efa", paddingTop: "15px" }}
                >
                  During Event Features
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h2 className="fs-4"></h2>
              </div>
              <div className="col-lg-6" >
                <h2 className="fs-4" style={{ color: "#808080" }}>
                DigiView makes it easy to attendees with features to simply check-in, deliver great content, drive engagement, and much more.
                </h2>
              </div>
              <div className="col-lg-2">
                <h2 className="fs-4"></h2>
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
            content={"Attendees Management"}
            link={"/attendance"}
            icon={<FaBookReader size={"5rem"} />}
          />
          <EventFeatureIcon
            content={"Networking Rooms"}
            link={"/networking"}
            icon={<FaUserFriends size={"5rem"} />}
          />
          <EventFeatureIcon
            content={"Video BroadCasting"}
            link={"/broadcasting"}
            icon={<MdOutlineLiveTv size={"5rem"} />}
          />
          <EventFeatureIcon
            content={"Virtual Communication"}
            link={"/virtual-communication"}
            icon={<SiPowervirtualagents size={"5rem"} />}
          />
          <EventFeatureIcon
            content={"Live Event Status"}
            link={"/event-status"}
            icon={<RiLiveLine size={"5rem"} />}
          />
        </div>
      </div>
    </>
  );
}

export default DuringEvent;
