import React from "react";
import image1 from "../images/virtual communication/download.jpg";
import image2 from "../images/virtual communication/images.jpg";
import image3 from "./about-page-img.jpg";
import AboutUs from "./sideImage.PNG";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
import { SiPowervirtualagents } from "react-icons/si";
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const VirtualCommunication = () => {
  let title = "Virtual Communication tool"
  let content = "The Virtual Communication Tool empowers event managers to create and host webinars, virtual summits, and online conferences with ease, facilitating seamless communication and engagement among participants regardless of geographical location."
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"During Event"} value3={"VIRTUAL COMMUNICATION TOOL"} value4={"/during-event"}/> 
      
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

export default VirtualCommunication;
