import React from "react";
import image1 from "../images/event status/airfocus-f2C59x5uvn8-unsplash.jpg";
import image2 from "../images/event status/jazmin-quaynor-18mUXUS8ksI-unsplash.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { FaBookReader } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Feedback = () => {
  
  let title = "Event Report/Feedbacks"
  let content = "The Feedback feature empowers event organizers to conduct live Q&A sessions, polls, and surveys during events,fostering active engagement and interaction among attendees.Here's how this feature enhances attendee participation and feedback collection"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"Post Event"} value3={"FEEDBACKS"} value4={"/post-event"}/> 
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

export default Feedback;
