import React from "react";
import image1 from "../images/event status/airfocus-f2C59x5uvn8-unsplash.jpg";
import image2 from "../images/event status/jazmin-quaynor-18mUXUS8ksI-unsplash.jpg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { FaBookReader } from "react-icons/fa";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const EventRecording = () => {
  let title = "Budget Allocation"
  let content = "Event organizers have the capability to effectively manage the  budget for their events within the platform. This feature provides organizers with the necessary tools to allocate funds, track expenses, and ensure financial transparency throughout the event planning process."
  
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"Post Event"} value3={"EVENT RECORDINGS"} value4={"/post-event"}/> 
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<FaBookReader size={70} color='#3c85c9' />} image={AboutUs}/>

      
    </>
  );
};

export default EventRecording;
