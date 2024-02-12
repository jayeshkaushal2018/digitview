import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../images/budget allocation/first.svg";
import image2 from "../images/budget allocation/second.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import { AiTwotoneDollar } from "react-icons/ai";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Budget = () => {
  let title = "Budget Allocation"
  let content = "Event organizers have the capability to effectively manage the  budget for their events within the platform. This feature provides organizers with the necessary tools to allocate funds, track expenses, and ensure financial transparency throughout the event planning process."
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={" Pre Event"} value3={"Budget Allocation"}/> 
      <ImageSlider marginLeft={"400px"}  marginTop= {"200px"} width={896}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<AiTwotoneDollar size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  )
}

export default Budget
