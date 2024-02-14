import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ImageSlider from '../ImageSlider/ImageSlider';
import image1 from "../../images/budget allocation/first.svg";
import image2 from "../../images/budget allocation/second.jpg";
import { AiTwotoneDollar } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa6";
const images = [{ url: image1 }, { url: image2 }];
function FeaturePage() {
    return (
        <>
            <Breadcrumb value1={"Our Service"} value2={" Pre Event"} value3={""} />
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
                                    <h2 className="fs-1 mb-5  fw-bold" style={{ "color": "#3d9efa", "paddingTop": "15px" }}>Pre Event Features</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{"marginLeft":"20%","marginTop":"40px"}}>
                        <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <AiTwotoneDollar size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Budget<br/>Allocation</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <IoTicket size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className=" fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Ticket<br/>Purchase</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <FaBookReader size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="  fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>RSPV<br/>Management</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px" ,"padding":"25px"}}>
                                    <FaAdversal size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className=" fw-bold" style={{ "color": "#696969", "paddingTop": "35px","textAlign":"center" }}>Promotion</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center"  >
                            <div className="row">
                                <div className="col-lg-12" style={{"backgroundColor":"white","border":"2px solid #3d9efa","borderRadius":"12px","padding":"25px"}}>
                                    <FaBookReader size={"5rem"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="  fw-bold" style={{ "color": "#696969", "paddingTop": "15px","textAlign":"center" }}>Vendor Management</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>

    )
}

export default FeaturePage;