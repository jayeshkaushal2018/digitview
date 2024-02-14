import React from "react";
import image1 from "../images/clone event/clone.png";
import image2 from "../images/clone event/window_popup.svg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import { FaBookReader } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const CloneEvent = () => {
  let title = "Clone Events"
  let content = "The event cloning feature enables organizers to replicate past events effortlessly, streamlining the event planning process and ensuring consistency in event management"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"Post Event"} value3={"CLONE EVENTS"} value4={"/post-event"}/> 
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<FaBookReader size={65} color='#3c85c9' />} image={AboutUs}/>

      
    </>
  );
};

export default CloneEvent;
