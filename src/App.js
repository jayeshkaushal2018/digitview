import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import LoginSignUp from './components/LoginSignup/LoginSignup';
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
import Dropdown from 'react-multilevel-dropdown';
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
            <Link to="/" className="navbar-brand text-light fw-semibold" style={{"margin-right":"30px"}}>
              {/* <img src={DigiviewLogo} className="img-fluid" alt="" width="30" height="40"/> */}
              DigiView
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <div className="dropdown">
                <Nav.Link href="/" className="active text-uppercase text-light" style={{"margin-right":"30px"}}>
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
                </div>
              </div>
              {/* <Nav.Link href="/blog" className="text-uppercase">
                <b>Blog</b>
              </Nav.Link> */}
              {/* <Nav.Link href="/eventOrg" className="text-uppercase">
                <b>EventS</b>
              </Nav.Link> */}
              <Nav.Link href="/about" className="text-uppercase text-light " style={{"margin-right":"30px"}}>
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase text-light" style={{"margin-right":"30px"}}>
                <b>Contact Us</b>
              </Nav.Link> 
              <Nav.Link href="/login" className="text-uppercase text-light" style={{"margin-right":"30px"}}>
              {storedData ? (
                <button
                  class="btn btn-primary "
                  style={{
                    // "margin-left": 500,
                    // width: 160,
                    // "border-radius": 2,
                    "background":"#3d9efa", 
                    "border": "none",
                  }}
                  
                  onClick={logOut}
                >
                  <b>Logout</b>
                </button>
              ) : (
                <button
                  class="btn btn-primary "
                  style={{
                    // "margin-left": 500,
                    // width: 160,
                    // "border-radius": 2,
                    "background":"#3d9efa", 
                    "border": "none",
                  }}
                  onClick={login}
                >
                  <b>Login</b>
                </button>
              )}
              </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
            <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                    <a href="LoginSignUp">Login/Sign Up</a>
                </button >
            </div>
            </Nav>
          </Navbar.Collapse> */}
          
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/LoginSignUp' element={<LoginSignUp/>} /> */}
        <Route path="/list" element={<EventList />} />
        <Route path="/find-events" element={<FilterEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventOrg" element={<EventOrg />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event-organize" element={<EventsOrganization />} />
    
      </Routes>

      <footer className="bg-body-tertiary">
        {/* <p className="p-3 m-0 text-center">copyright @ made by Ionut Cora</p> */}
      </footer>
    </div>
  );
}

export default App;
