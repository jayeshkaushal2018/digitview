import React from "react";
import image1 from "../images/promotions/download.jpg";
import image2 from "../images/promotions/download (2).jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { FaAdversal } from "react-icons/fa6";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Promotions = () => {
  
  let title = "Promotions"
  let content = "  Promotions Management empowers event organizers to effectively promote their events and engage attendees through targeted marketing efforts. DigiView offers a range of promotional tools and features"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={" Pre Event"} value3={"PROMOTIONS"} value4={"/pre-event"}/> 
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<FaAdversal size={60} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default Promotions;
