import React from "react";
import image1 from "../images/rsvp management/first.jpg";
import image2 from "../images/rsvp management/second.jpg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Feature from '../components/Feature/Feature';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { FaBookReader } from "react-icons/fa";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const RsvpPage = () => {
  let title = "RSVP Management"
  let content = " Organizers create RSVP invitations within the platform, specifying event details such as the event name, date, time, location, and any additional information attendees need to know.The invitation includes a call - to - action prompting recipients to respond with their attendance status"
  return (
    <>
      <Breadcrumb value1={"Our Service"} value2={" Pre Event"} value3={"RSPV Management"} value4={"/pre-event"} />

      <ImageSlider marginLeft={"400px"} marginTop={"45px"} width={1200}
        height={504}
        images={images}
        showBullets={"true"}
        showNavs={"true"}
        autoPlay={"true"}
        autoPlayDelay={3.0} />
      <Feature title={title} content={content} icone={<FaBookReader size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default RsvpPage;
