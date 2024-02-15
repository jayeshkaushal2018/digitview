import React from "react";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer/Footers";
import Routing from "./Routing";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
