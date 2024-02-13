import React from "react";
import image1 from "../images/attendance management/download.jpg";
import image2 from "../images/attendance management/images.jpg";
import image3 from "./../assets/about-page-img.jpgg";
import AboutUs from "./sideImage.PNG";
import { FaBookReader } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Attandance = () => {
  let title = "Attendance Management"
  let content = "The Attendance Management feature empowers event managers to efficiently monitor attendee participation and track event attendance, ensuring accurate record-keeping and seamless event operations."
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"During Event"} value3={"ATTENDANCE MANAGEMENT"} value4={"/during-event"}/> 
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

export default Attandance;
