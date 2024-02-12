import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./components/LoginSignup/Signup";
import DigiviewLogo from "../src/pages/digiviewLogo.webp";
import EventDetails from "./pages/EventDetails/EventDetails";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import Blog from "./pages/Blog";
import EventList from "./pages/EventList/EventList";
import Products from "./pages/Products";
import Login from "./components/LoginSignup/Login";
import EventOrg from "./pages/EventOrg/EventOrg";
import Event from "./pages/Event";
import Sidebar from "./components/SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import EventsOrganization from "./components/Events";
import PreEvent from "./pages/PreEvent";
import Dropdown from "react-multilevel-dropdown";
import Budget from "./pages/Budget";
import Ticket from "./pages/Ticket";
import Workflow from "./pages/Workflow";
import PurchaseTicket from "./pages/PurchaseTicket";
import Promotions from "./pages/Promotions";
import Attandance from "./pages/Attandance";
import Networking from "./pages/Networking";
import VideoBroadcasting from "./pages/VideoBroadcasting.JS";
import VirtualCommunication from "./pages/VirtualCommunication";
import LiveEventStatus from "./pages/LiveEventStatus";
import VideoCasting from "./pages/VideoCasting";
import PostPromotion from "./pages/PostPromotion";
import EventRecording from "./pages/EventRecording";
import AudienceData from "./pages/AudienceData";
import CloneEvent from "./pages/CloneEvent";
import Demo from "./pages/demo";
import RsvpPage from "./pages/RsvpPage";
import Vendor from "./pages/Vendor";
import NewAboutUs from "./pages/NewAboutUs";
import Feedback from "./pages/Feedback";

function App() {
  const storedData = localStorage.getItem("token");

  const navigate = useNavigate("/login");

  const login = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand text-light fw-semibold"
              style={{ "margin-right": "30px" }}
            >
              {/* <img src={DigiviewLogo} className="img-fluid" alt="" width="30" height="40"/> */}
              DigiView
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <div className="dropdown">
                {/* <Nav.Link href="/" className="active text-uppercase text-light" style={{"margin-right":"30px"}}>
                  <b>Our Service</b>
                </Nav.Link>
                <div className="dropdown-content">
                  <a href="#">Pre-Event</a>
                  <div className='sub-custom-dropdown'>
                    <a href='#'>Payments</a>
                    <a herf="#">Track Inventroy</a>
                    <a herf="#">Plan seating</a>
                  </div>
                  <a herf="#">During-Event</a>
                  <div className='sub-custom-dropdown'>
                    <a href='#'>Book meeting</a>
                    <a herf="#">Share content</a>
                    <a herf="#">Generate leads</a>
                  </div>
                  <a herf="#">Post-Event</a>
                  <div className='sub-custom-dropdown'>
                    <a href='#'>Attendance</a>
                    <a herf="#">Financial Report</a>
                    <a herf="#">Travel Report</a>
                  </div>
                </div> */}
                <ul>
                  <li>
                    <a href="#" style={{ background: "#3d9efa",color:"#fff" }}>
                      OUR SERVICE
                    </a>
                    <ul>
                      <li>
                        <a href="#">Pre-Event</a>
                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/budget"
                                className="text-dark"
                                style={{ "margin-right": "30px" ,}}
                              >
                                <p>Budget&nbsp;Allocation</p>
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/ticket"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Ticket&nbsp;Purchase
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/rspv"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                RSVP&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/Promotion"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Promotions
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/vendor"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Vendor&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">During-Event</a>
                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/attendance"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                <p>Attendance&nbsp;Management</p>
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/networking"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Networking&nbsp;Rooms
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/broadcasting"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Video&nbsp;Broadcasting
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/virtual-communication"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Virtual&nbsp;Communication&nbsp;Tool
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/event-status"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Live&nbsp;Event&nbsp;Status
                              </Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Post-Event</a>

                        <ul>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/post-promotion"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                <p>Post&nbsp;Event&nbsp;Promotion</p>
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/event-recording"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Event&nbsp;Recording
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/audience-data"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Audience&nbsp;Data&nbsp;Management
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/clone-event"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Clone&nbsp;Events
                              </Nav.Link>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Nav.Link
                                href="/feedback"
                                className="text-dark"
                                style={{ "margin-right": "30px" }}
                              >
                                Feedback
                              </Nav.Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <a  href="/contact">CONTACT US</a>
            </li> */}
                  {/* {storedData ? (
              <button class="btn btn-primary py-0" pe-5 onClick={logOut}>
                <b>LOGOUT</b>
              </button>
            ) : (
              <button
                class="btn btn-primary py-0  pe-5"
                style={{
                  background: "#3d9efa",
                  border: "none",
                }}
                onClick={login}
              >
                <b>LOGIN</b>
              </button>
            )} */}
                </ul>
              </div>
              {/* <Nav.Link href="/blog" className="text-uppercase">
                <b>Blog</b>
              </Nav.Link> */}
              {/* <Nav.Link href="/eventOrg" className="text-uppercase">
                <b>EventS</b>
              </Nav.Link> */}
              <Nav.Link
                href="/about"
                className="text-uppercase text-light "
                style={{ "margin-right": "30px" }}
              >
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-uppercase text-light"
                style={{ "margin-right": "30px" }}
              >
                <b>Contact Us</b>
              </Nav.Link>
              <Nav.Link
                href="/login"
                className="text-uppercase text-light"
                style={{ "margin-right": "30px" }}
              >
                {storedData ? (
                  <button
                    class="btn btn-primary "
                    style={{
                      // "margin-left": 500,
                      // width: 160,
                      // "border-radius": 2,
                      background: "#3d9efa",
                      border: "none",
                      fontSize: "18px",
                      paddingTop:'2px'
                    }}
                    onClick={logOut}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    class="btn btn-primary "
                    style={{
                      // "margin-left": 500,
                      // width: 160,
                      // "border-radius": 2,
                      background: "#3d9efa",
                      border: "none",
                      fontSize: "18px",
                      paddingTop:'2px'
                    }}
                    onClick={login}
                  >
                   <b>Login</b> 
                  </button>
                )}
              </Nav.Link>
              <Nav.Link
                href="/demo"
                className="text-uppercase text-light"
                style={{ "margin-right": "30px" }}
              >
                <button style={{ "border-radius": "10px","background-color": "white","border": "none","color": "#3d9efa","padding": "9px 32px","text-align": "center","text-decoration": "none","display": "inline-block" ,"font-size": "16px"}}><h5><b>Get a demo</b></h5></button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<EventList />} />
        <Route path="/find-events" element={<FilterEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventOrg" element={<EventOrg />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event-organize" element={<EventsOrganization />} />
        <Route path="/pre-event" element={<PreEvent />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/Promotion" element={<Promotions />} />
        <Route path="/purchase-ticket" element={<PurchaseTicket />} />
        <Route path="/attendance" element={<Attandance />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/broadcasting" element={<VideoCasting />} />
        <Route path="/virtual-communication" element={<VirtualCommunication />}/>
        <Route path="/event-status" element={<LiveEventStatus />} />
        <Route path="/post-promotion" element={<PostPromotion/>} />
        <Route path="/event-recording" element={<EventRecording/>} />
        <Route path="/audience-data" element={<AudienceData/>} />
        <Route path="/clone-event" element={<CloneEvent/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/rspv" element={<RsvpPage/>} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/about" element={<NewAboutUs/>} />
      </Routes>

      <footer className="bg-body-tertiary">
        {/* <p className="p-3 m-0 text-center">copyright @ made by Ionut Cora</p> */}
      </footer>
    </div>
  );
}

export default App;
