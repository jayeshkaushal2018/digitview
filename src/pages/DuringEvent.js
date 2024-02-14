import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import image1 from "../images/budget allocation/first.svg";
import image2 from "../images/budget allocation/second.jpg";
import { FaBookReader } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiPowervirtualagents } from "react-icons/si";
import EventFeatureIcon from '../components/EventFeatureIcon';
import { RiLiveLine } from "react-icons/ri";
const images = [{ url: image1 }, { url: image2 }];
function DuringEvent() {
    return (
        <>
            <Breadcrumb value1={"Our Service"} value2={"During Event"} value3={""} />
            <ImageSlider marginLeft={"400px"} marginTop={"45px"} width={1200}
                height={504}
                images={images}
                showBullets={"true"}
                showNavs={"true"}
                autoPlay={"true"}
                autoPlayDelay={3.0} />
            <div style={{ "marginBottom": "150px", "marginTop": "150px" }}>
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center" >
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="fs-1 mb-5  fw-bold" style={{ "color": "#3d9efa", "paddingTop": "15px" }}>During Event Features</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{"marginLeft":"20%","marginRight":"20%","borderRadius":"15px","paddingLeft":"10%","paddingTop":"5%","paddingBottom":"5%","marginTop":"40px","backgroundColor":"#dfe6ea" }}>
                        {/* <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <FaBookReader size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Attendees<br/>Management</h4>
                                </div>
                            </div>
                        </div> */}
                        <EventFeatureIcon content={"Attendees Management"} icon={<FaBookReader size={"5rem"}/>} />
                        {/* <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <FaUserFriends size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className=" fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Networking<br/>Rooms</h4>
                                </div>
                            </div>
                        </div> */}
                        <EventFeatureIcon content={"Networking Rooms"} icon={<FaUserFriends size={"5rem"}/>} />
                        {/* <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <MdOutlineLiveTv size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="  fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Video<br/>BroadCasting</h4>
                                </div>
                            </div>
                        </div> */}
                        <EventFeatureIcon content={"Video BroadCasting"} icon={<MdOutlineLiveTv size={"5rem"}/>} />
                        {/* <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px" ,"padding":"25px"}}>
                                    <SiPowervirtualagents size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className=" fw-bold" style={{ "color": "#696969", "paddingTop": "0px","textAlign":"center" }}>Virtual Communication<br/>Tool</h4>
                                </div>
                            </div>
                        </div> */}
                        <EventFeatureIcon content={"Virtual Communication"} icon={<SiPowervirtualagents size={"5rem"}/>} />
                        {/* <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <RiLiveLine size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="  fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Live Event<br/>Status</h4>
                                </div>
                            </div>
                        </div> */}
                        
                        <EventFeatureIcon content={"Live Event Status"} icon={<RiLiveLine size={"5rem"}/>} />
                    </div>
            </div>
        </>

    )
}

export default DuringEvent;