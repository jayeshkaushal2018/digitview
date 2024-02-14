import React from "react";
import image1 from "../images/ticket purchase/images.png";
import image2 from "../images/ticket purchase/second.png";
import image3 from "./../assets/about-page-img.jpgg";
import AboutUs from "./sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { IoTicket } from "react-icons/io5";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Ticket = () => {
  let title = "Ticket Management"
  let content = "Event managers have the capability to efficiently monitor ticket sales and attendance within the platform, ensuring seamless event management."
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={" Pre Event"} value3={"Ticket Purchase"} value4={"/pre-event"}/> 
      
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<IoTicket size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default Ticket;
