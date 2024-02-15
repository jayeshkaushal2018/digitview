// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import EventList from "./pages/EventList/EventList";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import EventDetails from "./pages/EventDetails/EventDetails";
import Products from "./pages/Products";
import Login from "./components/LoginSignup/Login";
import EventOrg from "./pages/EventOrg/EventOrg";
import EventsOrganization from "./components/Events";
import PreEvent from "./pages/PreEvent";
import Budget from "./pages/Budget";
import Ticket from "./pages/Ticket";
import Promotions from "./pages/Promotions";
import PurchaseTicket from "./pages/PurchaseTicket";
import Attandance from "./pages/Attandance";
import Networking from "./pages/Networking";
import VideoCasting from "./pages/VideoCasting";
import VirtualCommunication from "./pages/VirtualCommunication";
import LiveEventStatus from "./pages/LiveEventStatus";
import PostPromotion from "./pages/PostPromotion";
import EventRecording from "./pages/EventRecording";
import AudienceData from "./pages/AudienceData";
import CloneEvent from "./pages/CloneEvent";
import Feedback from "./pages/Feedback";
import Demo from "./pages/demo";
import RsvpPage from "./pages/RsvpPage";
import Vendor from "./pages/Vendor";
import NewAboutUs from "./pages/NewAboutUs";
import FeaturePage from "./components/FeaturePage/FeaturePage";
import PostEvent from "./pages/PostEvent";
import DuringEvent from "./pages/DuringEvent";
import PrivateRoute from "./PrivateRoute";
import Signup from "./components/LoginSignup/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/list" element={<EventList />} />
      <Route path="/find-events" element={<FilterEvents />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/eventOrg" element={<EventOrg />} />
      <Route path="/signup" element={<Signup />} />
      <Route exact path="/" element={<PrivateRoute />}>
        <Route path="/event-organize" element={<EventsOrganization />} />
      </Route>
      <Route path="/pre-event" element={<PreEvent />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/Promotion" element={<Promotions />} />
      <Route path="/purchase-ticket" element={<PurchaseTicket />} />
      <Route path="/attendance" element={<Attandance />} />
      <Route path="/networking" element={<Networking />} />
      <Route path="/broadcasting" element={<VideoCasting />} />
      <Route path="/virtual-communication" element={<VirtualCommunication />} />
      <Route path="/event-status" element={<LiveEventStatus />} />
      <Route path="/post-promotion" element={<PostPromotion />} />
      <Route path="/event-recording" element={<EventRecording />} />
      <Route path="/audience-data" element={<AudienceData />} />
      <Route path="/clone-event" element={<CloneEvent />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/rspv" element={<RsvpPage />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/about" element={<NewAboutUs />} />
      <Route path="/feature" element={<FeaturePage />} />
      <Route path="/post-event" element={<PostEvent />} />
      <Route path="/during-event" element={<DuringEvent />} />
    </Routes>
  );
};

export default Routing;