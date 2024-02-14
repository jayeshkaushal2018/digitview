import React from "react";
import image1 from "../images/post event promotions/Screenshot-2023-08-16-at-3.02.41-PM.png";
import image2 from "../images/post event promotions/images.jpg";
import image3 from "./../assets/about-page-img.jpg";
import AboutUs from "./../assets/sideImage.PNG";
import { FaBookReader } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Feature from '../components/Feature/Feature';
const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const PostPromotion = () => {
  let title = "Post event promotions"
  let content = " Promotions Management empowers event organizers to effectively promote their events and engage attendees through targeted marketing efforts. DigiView offers a range of promotional tools and features, including"
  return (
    <>
      <Breadcrumb value1={"Our Service"}  value2={"Post Event"} value3={"POST EVENT PROMOTIONS"} value4={"/post-event"}/> 
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

export default PostPromotion;
