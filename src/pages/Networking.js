import React from "react";
import image1 from "../images/networking/download (1).jpg";
import image2 from "../images/networking/download.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { FaCommentAlt } from "react-icons/fa";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Networking = () => {
  let title = "Networking rooms"
  let content = "Interaction among attendees provides participants a platform to engage and establish meaningful connections with one another, fostering collaboration and professional relationships. Digiview offers interactive networking tools to facilitate meaningful connections among attendees."
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"During Event"} value3={"NETWORKING ROOMS"} value4={"/during-event"}/> 
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<FaCommentAlt size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default Networking;
