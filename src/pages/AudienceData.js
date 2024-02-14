import React from "react";
import image1 from "../images/audience management/download (1).jpg";
import image2 from "../images/audience management/download.jpeg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { FaBookReader } from "react-icons/fa";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const AudienceData = () => {
  let title = "Audience Database Management"
  let content = "Audience database management collecting,organizing, and maintaining data related to an organization's audience or customer base. This data typically includes information such as demographics, contact details, preferences,behavior patterns, and interactions with the organization"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"Post Event"} value3={"AUDIENCE DATABASE MANAGEMENT"} value4={"/post-event"}/> 
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

export default AudienceData;
