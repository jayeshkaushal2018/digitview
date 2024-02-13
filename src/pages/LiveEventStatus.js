import React from "react";
import image1 from "../images/event status/airfocus-f2C59x5uvn8-unsplash.jpg";
import image2 from "../images/event status/jazmin-quaynor-18mUXUS8ksI-unsplash.jpg";
import image3 from "./../assets/about-page-img.jpgg";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import AboutUs from "./sideImage.PNG";
import { MdLiveTv } from "react-icons/md";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const LiveEventStatus = () => {
  
  let title = "Active/ Live Event Status"
  let content = " The Active/Live Event Status Monitoring feature empowers event managers to stay informed about the real-time status and performance of their events, ensuring smooth operations and timely interventions"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"During Event"} value3={"LIVE EVENT STATUS"} value4={"/during-event"}/>
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={< MdLiveTv size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default LiveEventStatus;
