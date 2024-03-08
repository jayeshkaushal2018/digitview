import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoBulb } from "react-icons/io5";
import "./NewAboutUs.css";
import cal_image from "./../images/cal_image.png";
import { FaPeopleRobbery } from "react-icons/fa6";
import Footer from '../components/Footer/Footers';

function NewAboutUs() {
    return (<>
        <div>
            <Container style={{ "marginTop": "100px" }}>
                <Row>
                    <Col >
                        <p className='title'>W E A R E <br />
                            <p style={{ "font-weight": "bold", 'fontSize': "190%" }}>NO.1 EVENTS<br />MANAGEMENT<hr className='hr' /></p>
                        </p>
                        <p style={{ "font-weight": "bold", 'fontSize': "120%" }}> DigiView is an innovative event management platform <br />
                            that will save your time and make it easy for you to take<br />
                            control of the important event activities
                        </p>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <div style={{ "width": "100%", "height": "75%", "backgroundColor": "#1472c9", "borderRadius": "120px", "marginTop": "50%" }}>
                                    <p style={{ "paddingLeft": "50px", "paddingTop": "2px", "marginBottom": "-22PX" }}> <FaHandshakeAngle color="white" fontSize="5.5em" /></p><br /><h5 style={{ "paddingLeft": "40PX", "color": 'white' }}>Friendly Team </h5><p style={{ "paddingLeft": "19PX", "color": 'white' }}><b>More Than 200 Teams</b></p>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ "width": "100%", "height": "75%", "backgroundColor": "#1472c9", "borderRadius": "120px", "marginTop": "50%" }}>
                                    <p style={{ "paddingLeft": "70px", "paddingTop": "14px", "marginBottom": "-22px" }}> <FaClockRotateLeft color="white" fontSize="3.5em" /></p><br /><h5 style={{ "paddingLeft": "55PX", "color": 'white' }}>24/7 Hours Support</h5><p style={{ "paddingLeft": "28PX", "color": 'white' }}><b>Anytime anywhere</b></p>
                                </div>
                            </Col>
                            <Col >
                                <div style={{ "width": "100%", "height": "75%", "backgroundColor": "#1472c9", "borderRadius": "120px", "marginTop": "50%" }}>
                                    <p style={{ "paddingLeft": "60px", "marginBottom": "-22PX", "paddingTop": "10px" }}> <IoBulb color="white" fontSize="4.5em" /></p><br /><h5 style={{ "paddingLeft": "40PX", "color": 'white' }}>Brilliant Idea </h5><p style={{ "paddingLeft": "19PX", "color": 'white' }}><b>We have million idea</b></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
        <div>
            <Container style={{ "marginTop": "50px" }}>
                <Row>
                    <Col >
                        <img src={cal_image} className="img-fluid" alt="" style={{ "width": "100%", "border": "0px" }} />
                    </Col>
                    <Col style={{"background-color": "#f1f5f9","borderRadius": "40px" }} >
                        <div style={{"paddingLeft":"50px","paddingTop":"50px"}}>
                        <p style={{ "font-weight": "bold", 'fontSize': "350%"}}>All IN ONE<br />PLATFORM</p>
                        <p style={{ "font-weight": "bold", 'fontSize': "120%" }}> From Budget Allocation Tool to Advance Reporting,<br/>DigiView’s all in one event management software<br/>simplifies event planning
                        </p>
                        <hr className='hr' />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
        <div>
            <Container style={{ "marginTop": "100px" }}>
                <Row>
                    <Col  >
                        <div style={{"background-color": "#1472c9","borderRadius": "40px ","paddingLeft":"70px","padding":"30px","color":"white"}}>
                        <p className='title'>
                            <p style={{ "font-weight": "bold", 'fontSize': "190%" }}>Navigating Complexity with Passion</p>
                        </p>
                        <p style={{ "font-weight": "bold", 'fontSize': "120%" }}> DigiView is an innovative event management platform <br />
                            that will save your time and make it easy for you to take<br />
                            control of the important event activities
                        </p>
                        </div>
                    </Col>
                    {/* <Col sm={3}  > */}
                    {/* <div style={{"background-color": "#1472c9", "paddingLeft": "80px","paddingRight":"50px", "paddingTop": "65px","paddingBottom":"65px","borderRadius": " 0px 40px 40px 0px ","marginLeft":"-25PX"}}>    
                    <p > <FaPeopleRobbery color="white" fontSize="8.5em" /></p>
                    </div> */}
                    {/* </Col> */}
                </Row>

            </Container>
        </div>
        {/* <Footer /> */}
    </>
    );
}

export default NewAboutUs;