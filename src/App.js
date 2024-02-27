import React from "react";
import NavbarMenu from "./components/Navbar";
import Footer from "./pages/Footer.js";
import Routing from "./Routing";
import "./App.css";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" ? <NavbarMenu /> : null}
      <Routing />
      {location.pathname !== "/login" ? <Footer /> : null}
    </div>
  );
};

export default App;
