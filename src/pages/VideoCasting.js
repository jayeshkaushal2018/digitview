import React from "react";
import image1 from "../images/video broadcasting/download (2).jpg";
import image2 from "../images/video broadcasting/images.jpg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { SiPowervirtualagents } from "react-icons/si";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const VideoCasting = () => {
  let title = "Video Broadcasting"
  let content = " Video Broadcasting enables event organizers to broadcast live video content and virtual events to a global audience, expanding event reach and engagement. DigiView offers comprehensive video broadcasting capabilities"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"During Event"} value3={"VIDEO BROADCASTING"} value4={"/during-event"}/> 
      
      <ImageSlider marginLeft={"400px"}  marginTop= {"45px"} width={1200}
          height={504}
          images={images}
          showBullets={"true"}
          showNavs={"true"}
          autoPlay={"true"}
          autoPlayDelay={3.0}/>
      <Feature title={title} content={content} icone={<SiPowervirtualagents size={70} color='#3c85c9' />} image={AboutUs}/>

    </>
  );
};

export default VideoCasting;
