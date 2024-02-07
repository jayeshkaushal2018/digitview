import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./about-chef1.jpg";
import image2 from "./about-chef2.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { AiTwotoneDollar } from "react-icons/ai";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];
const PreEvent = () => {
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
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center" >
         <div className="row"><div className="col-lg-2" style={{ "background": "#fff","paddingTop":"7px", }}> <AiTwotoneDollar size={70} color= '#3c85c9' /></div>
         <div className="col-lg-10">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold" style={{"color":"#3c85c9" , "paddingTop":"15px"}}>Budget Allocation</h2>
            </div>
            </div>
            <h4 style={{"paddingLeft":"100px", "color":"#808080"}}>
              Event organizers have the capability to effectively manage the
              budget for their events within the platform. This feature provides
              organizers with the necessary tools to allocate funds, track
              expenses, and ensure financial transparency throughout the event
              planning process.
            </h4>
          </div>
          <div className="col-lg-5 d-flex justify-content-center d-none d-lg-flex" >
            <img src={AboutUs} className="img-fluid w-55" alt="about img" style={{"border-color":"white"}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreEvent;
